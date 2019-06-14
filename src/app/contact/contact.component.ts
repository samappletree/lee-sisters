import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-image', 'url("./assets/IMG_2283.JPG")');
    this.renderer.setStyle(document.body, 'background-position', 'bottom');
  }

  ngOnInit() {
  }

}
