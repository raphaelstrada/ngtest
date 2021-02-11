import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private albumService: AlbumService) { }
  albums = [];
  currentAlbum: any = {};
  tracks = [];
  title = 'trendy2';
  
  ngOnInit() {
    this.albumService.getAlbums().subscribe((response: any) => {
      const albums = response;
      this.currentAlbum = albums[0];
      this.albums = albums;

    });
  }
}
