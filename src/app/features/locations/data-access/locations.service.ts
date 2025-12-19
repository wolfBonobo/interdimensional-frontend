import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_CONFIG } from '@core/http/api-config';
import { Observable } from 'rxjs';
import { Location } from '../domain/location';

@Injectable({ providedIn: 'root' })
export class LocationsService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${API_CONFIG.baseUrl}/locations`;

  getLocations(page: number = 1): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.apiUrl}?page=${page}`);
  }

  getLocationById(id: string): Observable<Location> {
    return this.http.get<Location>(`${this.apiUrl}/${id}`);
  }
}
