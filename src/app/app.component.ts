import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SharedServiceService } from './service/shared-service.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('collapseAnimation', [
      state('collapsed', style({ height: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('collapsed => expanded', animate('300ms ease-out')),
      transition('expanded => collapsed', animate('300ms ease-in'))
    ])
  ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  videoMinimized: boolean = false;
  isNavbarCollapsed = true;

  constructor( private router: Router,private sharedService: SharedServiceService){}

  ngAfterViewInit() {
    // Play the video for 4 seconds
    this.playVideoForSeconds(4);
  }

  playVideoForSeconds(seconds: number) {
    if (this.videoPlayer) {
      // Play the video
      this.videoPlayer.nativeElement.play();

      // After specified seconds, minimize the video
      setTimeout(() => {
        this.minimizeVideo();
      }, seconds * 1000);
    }
  }

  minimizeVideo() {
    this.videoMinimized = true;
    this.sharedService.setBooleanValue(true);
  }
  redirectHome() {
    this.router.navigate(['/']);
  }
}
