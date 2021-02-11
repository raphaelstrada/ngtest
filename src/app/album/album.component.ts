import { Component, Input, OnInit, Output } from '@angular/core';
import { AlbumService } from '../album.service';
import { map, take, filter, first, single, takeUntil } from 'rxjs/operators';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  providers: [AlbumService]

})
export class AlbumComponent implements OnInit {
  constructor(private albumService: AlbumService) { }
  @Input() album: { name: string, id: number };
  @Output() artistName: string = "Loading...";
  @Output() tracksByAlbum: any;

  // artistName: string =  "Loading...";
  observaDor: any;
  getArtiste(album) {
    const { artist_id } = album;
    const albumObserver: Observable<Object> = this.albumService.getAlbumArtist(artist_id);
    this.observaDor = albumObserver
    .pipe(
      take(1)
    )
    .subscribe(
      async (response: any) => {
        this.artistName = await response.name;
      },
      err => console.error('Observer got an error: ' + err),
      () => {
        console.error('OVER3: ');
        this.observaDor.complete();
        this.observaDor.unsubscribe();

      },
    );

    return this.artistName;
    
  }
  getAlbumTracks(album) {
    const { id } = album;
    this.albumService.getAlbumTracks(id)
    .subscribe(
      async (response: any) => {
        console.log("end of albumTracks");
        this.tracksByAlbum = await response;
      },
      err => console.error('Observer got an error: ' + err),
      () => console.log("end of albumTracks")
    );
    return this.tracksByAlbum;
  }
  ngOnInit(): void {
    console.log("init")
  }
  
}
