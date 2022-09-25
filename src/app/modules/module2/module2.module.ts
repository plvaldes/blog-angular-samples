import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { PageComponent } from './page/page.component'
import { CounterService } from 'src/app/services/counter.service';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    Module2RoutingModule
  ],
  providers: [CounterService]
})
export class Module2Module { }
