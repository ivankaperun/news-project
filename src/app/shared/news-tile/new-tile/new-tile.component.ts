import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-tile',
  templateUrl: './new-tile.component.html',
  styleUrls: ['./new-tile.component.css'],
})
export class NewTileComponent implements OnInit {
  @Input() article: any;
  constructor() {}

  ngOnInit(): void {}
}
