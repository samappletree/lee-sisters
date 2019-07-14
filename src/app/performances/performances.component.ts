import { Component, OnInit } from '@angular/core';
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

  constructor(private performanceService: PerformanceService) {
  }

  ngOnInit() {
    // this.getPerformances();
    document.body.classList.add('performances-bg-img');
    document.body.classList.remove('home-bg-img');
    document.body.classList.remove('shop-bg-img');
    document.body.classList.remove('contact-bg-img');
    document.body.classList.remove('videos-bg-img');
  }

  getPerformances(): void {
    this.performanceService.getPerformances()
      .subscribe(performances => this.performances = performances);
  }
}
