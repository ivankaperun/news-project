import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { RouterModule } from '@angular/router';
import { BigBannerModule } from '../shared/big-banner/big-banner.module';
import { NewsTileModule } from '../shared/news-tile/news-tile.module';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    BigBannerModule,
    NewsTileModule,
    RouterModule.forChild([{ path: '', component: NewsComponent }]),
  ],
})
export class NewsModule {}
