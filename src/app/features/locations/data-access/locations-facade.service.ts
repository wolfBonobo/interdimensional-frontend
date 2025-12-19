import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, of } from 'rxjs';
import { catchError, finalize, switchMap, tap } from 'rxjs/operators';
import { CharactersService } from '../../characters/data-access/characters.service';
import { Character } from '../../characters/domain/character';
import { Location } from '../domain/location';
import { LocationsService } from './locations.service';

@Injectable({ providedIn: 'root' })
export class LocationsFacade {
  private readonly service = inject(LocationsService);
  private readonly characterService = inject(CharactersService);

  private readonly locationsSubject = new BehaviorSubject<Location[]>([]);
  private readonly selectedLocationSubject = new BehaviorSubject<Location | null>(null);
  private readonly residentsSubject = new BehaviorSubject<Character[]>([]);
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  private readonly currentPageSubject = new BehaviorSubject<number>(1);

  readonly locations$ = this.locationsSubject.asObservable();
  readonly selectedLocation$ = this.selectedLocationSubject.asObservable();
  readonly residents$ = this.residentsSubject.asObservable();
  readonly loading$ = this.loadingSubject.asObservable();
  readonly currentPage$ = this.currentPageSubject.asObservable();

  loadLocations(page: number = 1): void {
    this.loadingSubject.next(true);
    this.currentPageSubject.next(page);

    this.service
      .getLocations(page)
      .pipe(finalize(() => this.loadingSubject.next(false)))
      .subscribe({
        next: (data) => this.locationsSubject.next(data),
        error: (err) => console.error('TARS Error: Connection lost with Location API', err),
      });
  }

  loadLocationWithResidents(id: string): void {
    this.loadingSubject.next(true);
    this.residentsSubject.next([]);

    this.service
      .getLocationById(id)
      .pipe(
        tap((loc) => this.selectedLocationSubject.next(loc)),

        switchMap((loc) => {
          if (loc.residentIds && loc.residentIds.length > 0) {
            const characterRequests = loc.residentIds.map((charId) =>
              this.characterService.getCharacterById(charId.toString()),
            );
            return forkJoin(characterRequests);
          }
          return of([]);
        }),
        catchError((err) => {
          console.error('Critical failure in location-resident sync', err);
          return of([]);
        }),
        finalize(() => this.loadingSubject.next(false)),
      )
      .subscribe({
        next: (residents) => this.residentsSubject.next(residents),
      });
  }
}
