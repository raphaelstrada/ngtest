import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private http: HttpClient) {
  }
  get headers() {
    return new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${environment.validusSecret}` });
  }
  getAlbums() {
    return this.http.get('http://localhost:5000/albums?limit=3', {
      headers: this.headers
    });
  }
  getAlbumTracks(id: string) {
    return this.http.get(`http://localhost:5000/songs?album_id=${id}`, {
      headers: this.headers
    });

  }
  getAlbumArtist(id: string) {
    return this.http.get(`http://localhost:5000/artists/${id}`, {
      headers: this.headers
    });
  }
}