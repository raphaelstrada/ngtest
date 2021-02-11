import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  constructor() { }
  
  @Input() albums: [] = [];
  ngOnInit() {
  }

}
