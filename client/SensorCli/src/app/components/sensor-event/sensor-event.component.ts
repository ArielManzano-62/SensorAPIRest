import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { SensorEvent } from 'src/app/models/sensorEvent/sensorEvent';

import { SensorService } from '../../api/sensor.service';

@Component({
  selector: 'app-sensor-event',
  templateUrl: './sensor-event.component.html',
  styleUrls: ['./sensor-event.component.css'],
})
export class SensorEventComponent implements OnInit {
  @Input() sensorId: string = '';
  @Input() sensorName: string = '';

  sensorEvents: SensorEvent[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private sensorService: SensorService) {}

  ngOnChanges(changes: any) {
    if (changes.sensorId) {
      this.loading = true;
      this.errorMessage = '';
      this.sensorService.getEvents(this.sensorId).subscribe(
        (data) => {
          this.sensorEvents = data.data.sensorEvents.map((se: any) => {
            se.createdAt = new Date(se.createdAt).toLocaleString();
            return se;
          });
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          console.log(error);
        }
      );
    }
  }

  ngOnInit(): void {}

  value = new FormControl('');

  sendEvent() {
    this.errorMessage = '';
    this.sensorService.sendEvent(this.value.value, this.sensorId).subscribe(
      (data) => {
        let sensorEvent = {
          ...data.data.sensorEvent,
          createdAt: new Date(data.data.sensorEvent.createdAt).toLocaleString(),
        };
        this.sensorEvents.push(sensorEvent);
        this.value.setValue('');
      },
      (error) => {
        this.errorMessage = error.error.message;
      }
    );
  }
}
