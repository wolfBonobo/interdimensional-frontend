// src/app/features/episodes/data-access/episodes.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_CONFIG } from '@core/http/api-config';
import { Observable } from 'rxjs';
import { Episode } from '../domain/episode';

@Injectable({ providedIn: 'root' })
export class EpisodesService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${API_CONFIG.baseUrl}/episodes`;

  getEpisodes(page: number = 1): Observable<Episode[]> {
    return this.http.get<Episode[]>(`${this.apiUrl}?page=${page}`);
  }

  getEpisodeById(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.apiUrl}/${id}`);
  }
}
