import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_CONFIG } from '@core/http/api-config';
import { Observable } from 'rxjs';
import { Character } from '../domain/character';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${API_CONFIG.baseUrl}/characters`;

  getCharacters(page: number = 1): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}?page=${page}`);
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
}
