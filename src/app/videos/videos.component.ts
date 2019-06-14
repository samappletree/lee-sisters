import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-image', 'url("./assets/IMG_5862.JPG")');
  }

  ngOnInit() {
  }

}
