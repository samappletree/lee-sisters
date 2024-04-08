import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
    document.body.classList.remove('performances-bg-img');
    document.body.classList.remove('home-bg-img');
    document.body.classList.add('shop-bg-img');
    document.body.classList.remove('contact-bg-img');
    document.body.classList.remove('videos-bg-img');
  }

}
