import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { BigBannerModule } from '../shared/big-banner/big-banner.module';
import { NewsTileModule } from '../shared/news-tile/news-tile.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BigBannerModule,
    NewsTileModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
})
export class HomeModule {}
