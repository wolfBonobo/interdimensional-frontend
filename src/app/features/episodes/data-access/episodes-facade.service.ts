import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, of } from 'rxjs';
import { catchError, finalize, switchMap, tap } from 'rxjs/operators';
import { CharactersService } from '../../characters/data-access/characters.service';
import { Character } from '../../characters/domain/character';
import { Episode } from '../domain/episode';
import { EpisodesService } from './episodes.service';

@Injectable({ providedIn: 'root' })
export class EpisodesFacade {
  private readonly service = inject(EpisodesService);
  private readonly characterService = inject(CharactersService);

  private readonly episodesSubject = new BehaviorSubject<Episode[]>([]);
  private readonly selectedEpisodeSubject = new BehaviorSubject<Episode | null>(null);
  private readonly charactersSubject = new BehaviorSubject<Character[]>([]);
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  private readonly currentPageSubject = new BehaviorSubject<number>(1);

  readonly episodes$ = this.episodesSubject.asObservable();
  readonly selectedEpisode$ = this.selectedEpisodeSubject.asObservable();
  readonly characters$ = this.charactersSubject.asObservable();
  readonly loading$ = this.loadingSubject.asObservable();
  readonly currentPage$ = this.currentPageSubject.asObservable();

  loadEpisodes(page: number = 1): void {
    this.loadingSubject.next(true);
    this.currentPageSubject.next(page);

    this.service
      .getEpisodes(page)
      .pipe(finalize(() => this.loadingSubject.next(false)))
      .subscribe({
        next: (data) => this.episodesSubject.next(data),
        error: (err) => console.error('[TARS Log]: Episode stream interrupted', err),
      });
  }

  loadEpisodeWithCharacters(id: string): void {
    this.loadingSubject.next(true);
    this.charactersSubject.next([]);

    this.service
      .getEpisodeById(Number(id))
      .pipe(
        tap((ep) => this.selectedEpisodeSubject.next(ep)),

        switchMap((ep) => {
          if (ep.characterIds && ep.characterIds.length > 0) {
            const characterRequests = ep.characterIds.map((charId) =>
              this.characterService.getCharacterById(charId.toString()),
            );
            return forkJoin(characterRequests);
          }
          return of([]);
        }),
        catchError((err) => {
          console.error('[TARS Log]: Character resolution failed for this episode', err);
          return of([]);
        }),
        finalize(() => this.loadingSubject.next(false)),
      )
      .subscribe({
        next: (characters) => this.charactersSubject.next(characters),
      });
  }
}
