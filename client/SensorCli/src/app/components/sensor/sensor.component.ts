import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css'],
})
export class SensorComponent {
  sensorForm = new FormGroup({
    name: new FormControl(''),
    location: new FormGroup({
      latitude: new FormControl(0),
      longitude: new FormControl(0),
    }),
    valueMax: new FormControl(0),
    valueMin: new FormControl(0),
  });

  onSubmit() {
    console.log(this.sensorForm.value);
  }
}
