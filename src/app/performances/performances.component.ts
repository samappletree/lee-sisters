import { Component, OnInit, Renderer2 } from '@angular/core';
import { Performance } from '../performance';
import { PerformanceService } from '../performance.service';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.scss']
})
export class PerformancesComponent implements OnInit {

  performances: Performance[];
  title = 'Upcoming performances';

  constructor(private renderer: Renderer2, private performanceService: PerformanceService) {
    this.renderer.setStyle(document.body, 'background-image', 'url("./assets/IMG_2295.JPG")');
  }

  ngOnInit() {
    this.getPerformances();
  }

  getPerformances(): void {
    this.performanceService.getPerformances()
      .subscribe(performances => this.performances = performances);
  }
}
