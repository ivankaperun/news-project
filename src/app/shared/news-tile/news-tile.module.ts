import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsTileComponent } from './news-tile.component';
import { NewTileComponent } from './new-tile/new-tile.component';

@NgModule({
  declarations: [NewsTileComponent, NewTileComponent],
  exports: [NewsTileComponent],
  imports: [CommonModule],
})
export class NewsTileModule {}
