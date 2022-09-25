import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private _count: number;

  constructor() {
    this._count = 0
  }

  public set count(count: number) {
    this._count = count;
  }

  public get count(): number {
    return this._count;
  }
}
