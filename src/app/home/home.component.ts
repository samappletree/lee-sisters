import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    document.body.classList.remove('performances-bg-img');
    document.body.classList.add('home-bg-img');
    document.body.classList.remove('shop-bg-img');
    document.body.classList.remove('contact-bg-img');
    document.body.classList.remove('videos-bg-img');
  }

}
