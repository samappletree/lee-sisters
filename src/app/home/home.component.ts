import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-image', 'url("./assets/IMG_2388.JPG")');
    this.renderer.setStyle(document.body, 'background-position', 'center');
  }

  ngOnInit() {
  }

}
