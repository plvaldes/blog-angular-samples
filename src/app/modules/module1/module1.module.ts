import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { PageComponent } from './page/page.component';
import { CounterService } from 'src/app/services/counter.service';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  providers: [CounterService]
})
export class Module1Module { }
