import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigBannerComponent } from './big-banner.component';

@NgModule({
  declarations: [BigBannerComponent],
  exports: [BigBannerComponent],
  imports: [CommonModule],
})
export class BigBannerModule {}
