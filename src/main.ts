import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
  <h2>Angular Subscription Debugging Task</h2>

  <button (click)="loadData()">Load Data</button>
  
  <ul>
    <li *ngFor="let item of data">{{ item }}</li>
  </ul>
  
  `,
  imports: [CommonModule]
})
export class App {
  name = 'Angular';
  data: string[] = [];
  private _dataService = inject(DataService);

  loadData() {
    this.data = [];
    this._dataService.loadData$.subscribe(() => {
      this._dataService.getData().subscribe(result => {
        this.data = [...this.data, ...result];
      });
    });
    this._dataService.loadData$.next();
  }
}

bootstrapApplication(App);
