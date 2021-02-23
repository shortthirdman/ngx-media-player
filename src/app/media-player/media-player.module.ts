import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgApiService } from '@videogular/ngx-videogular/core';

import { MediaPlayerComponent } from './media-player.component';

@NgModule({
  declarations: [MediaPlayerComponent],
  imports: [
    CommonModule
  ],
  providers: [VgApiService],
  exports: [MediaPlayerComponent]
})
export class MediaPlayerModule { }
