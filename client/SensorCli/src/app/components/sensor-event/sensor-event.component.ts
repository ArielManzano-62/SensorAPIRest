import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sensor-event',
  templateUrl: './sensor-event.component.html',
  styleUrls: ['./sensor-event.component.css'],
})
export class SensorEventComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() sensorEvent: any;
}
