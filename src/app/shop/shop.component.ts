import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-image', 'url("./assets/shirtCollage.jpg")');
    this.renderer.setStyle(document.body, 'background-position', 'center');
  }

  ngOnInit() {
  }

}
