import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    document.body.classList.remove('performances-bg-img');
    document.body.classList.remove('home-bg-img');
    document.body.classList.remove('shop-bg-img');
    document.body.classList.remove('contact-bg-img');
    document.body.classList.add('videos-bg-img');
  }

}
