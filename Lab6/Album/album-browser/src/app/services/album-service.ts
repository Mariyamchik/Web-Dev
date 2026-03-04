import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/albums`);
  }

  getAlbumById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/albums/${id}/photos`);
  }

  updateAlbum(album: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/albums/${album.id}`, album);
  }
}