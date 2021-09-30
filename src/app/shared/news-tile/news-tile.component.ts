import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-tile',
  templateUrl: './news-tile.component.html',
  styleUrls: ['./news-tile.component.css'],
})
export class NewsTileComponent implements OnInit {
  @Input() items: Array<any> = [];
  constructor() {}

  ngOnInit(): void {}
}
