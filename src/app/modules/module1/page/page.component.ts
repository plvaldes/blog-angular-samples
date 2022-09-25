import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(public counterService: CounterService) { }

  ngOnInit(): void {
  }

  incrementCounter(): void {
    this.counterService.increment();
  }
}
