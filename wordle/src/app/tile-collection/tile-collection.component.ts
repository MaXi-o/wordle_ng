import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-collection',
  templateUrl: './tile-collection.component.html',
  styleUrls: ['./tile-collection.component.css']
})
export class TileCollectionComponent implements OnInit {

  @Input() "guess1": boolean

  constructor() { }

  ngOnInit(): void {
  }

}
