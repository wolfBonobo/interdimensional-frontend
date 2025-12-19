import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, forkJoin, of } from 'rxjs';
import { catchError, finalize, switchMap, tap } from 'rxjs/operators';
import { EpisodesService } from '../../episodes/data-access/episodes.service';
import { Episode } from '../../episodes/domain/episode';
import { Character } from '../domain/character';
import { CharactersService } from './characters.service';

@Injectable({ providedIn: 'root' })
export class CharactersFacade {
  private readonly service = inject(CharactersService);
  private readonly episodeService = inject(EpisodesService);

  private readonly charactersSubject = new BehaviorSubject<Character[]>([]);
  private readonly selectedCharacterSubject = new BehaviorSubject<Character | null>(null);
  private readonly loadedEpisodesSubject = new BehaviorSubject<Episode[]>([]);
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  private readonly currentPageSubject = new BehaviorSubject<number>(1);

  readonly characters$ = this.charactersSubject.asObservable();
  readonly selectedCharacter$ = this.selectedCharacterSubject.asObservable();
  readonly loadedEpisodes$ = this.loadedEpisodesSubject.asObservable();
  readonly loading$ = this.loadingSubject.asObservable();
  readonly currentPage$ = this.currentPageSubject.asObservable();

  loadCharacters(page: number = 1): void {
    this.loadingSubject.next(true);
    this.currentPageSubject.next(page);
    this.service
      .getCharacters(page)
      .pipe(finalize(() => this.loadingSubject.next(false)))
      .subscribe({
        next: (data) => this.charactersSubject.next(data),
        error: (err) => console.error('Error loading characters', err),
      });
  }

  // Orchestrates fetching character details and resolving episode data
  loadCharacterWithEpisodes(id: string): void {
    this.loadingSubject.next(true);
    this.loadedEpisodesSubject.next([]);

    this.service
      .getCharacterById(id)
      .pipe(
        tap((char) => this.selectedCharacterSubject.next(char)),
        switchMap((char) => {
          // Resolve array of IDs from the backend response
          if (char.episodeIds && char.episodeIds.length > 0) {
            const requests = char.episodeIds.map((epId) =>
              this.episodeService.getEpisodeById(epId),
            );
            return forkJoin(requests);
          }
          return of([]);
        }),
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false)),
      )
      .subscribe((episodes) => this.loadedEpisodesSubject.next(episodes));
  }
}
