import { Component, OnInit } from '@angular/core';

import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {

  constructor(private vgApi: VgApiService) {}

  ngOnInit(): void {
  }
  
  onPlayerReady(event?: any) {
	this.vgApi.getDefaultMedia().subscriptions.ended.subscribe(
        () => {
            // Set the video to the beginning
            this.vgApi.getDefaultMedia().currentTime = 0;
        }
    );
  }
}
