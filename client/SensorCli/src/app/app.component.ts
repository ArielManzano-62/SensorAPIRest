import { Component } from '@angular/core';
import { Sensor } from './models/sensor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sensors: Sensor[] = [
    { id: 1, name: 'Sensor 1' },
    { id: 2, name: 'Sensor 2' },
    { id: 3, name: 'Sensor 3' },
  ];
}
