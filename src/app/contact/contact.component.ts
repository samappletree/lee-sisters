import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
    document.body.classList.remove('performances-bg-img');
    document.body.classList.remove('home-bg-img');
    document.body.classList.remove('shop-bg-img');
    document.body.classList.add('contact-bg-img');
    document.body.classList.remove('videos-bg-img');
  }

}
