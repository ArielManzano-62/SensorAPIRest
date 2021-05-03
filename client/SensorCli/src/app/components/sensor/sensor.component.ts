import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Sensor } from '../../models/sensor/sensor';

import { SensorService } from 'src/app/api/sensor.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css'],
})
export class SensorComponent implements OnInit {
  constructor(private sensorService: SensorService) {}
  sensors: Sensor[] = [];

  ngOnInit(): void {
    this.sensorService.getSensors().subscribe(
      (data) => {
        this.sensors = data.data.sensors;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sensorSelected: Sensor = new Sensor();

  onSelected(sensor: Sensor) {
    this.sensorSelected = sensor;

    this.sensorForm.setControl('id', new FormControl(sensor._id));
    this.sensorForm.setControl('name', new FormControl(sensor.name));

    this.sensorForm
      .get('location.longitude')
      ?.setValue(sensor.location.longitude);
    this.sensorForm
      .get('location.latitude')
      ?.setValue(sensor.location.latitude);

    this.sensorForm.setControl('valueMax', new FormControl(sensor.valueMax));
    this.sensorForm.setControl('valueMin', new FormControl(sensor.valueMin));
  }

  sensorForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    location: new FormGroup({
      latitude: new FormControl(),
      longitude: new FormControl(),
    }),
    valueMax: new FormControl(),
    valueMin: new FormControl(),
  });

  onSubmit() {
    if (this.sensorForm.value.id) {
      this.sensorService
        .updateSensor({ ...this.sensorForm.value, active: true })
        .subscribe(
          (data) => {
            let index = this.sensors.findIndex(
              (sensor) => sensor._id === data.data.sensor._id
            );
            this.sensors[index] = data.data.sensor;
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      this.sensorService
        .addSensor({ ...this.sensorForm.value, active: true })
        .subscribe(
          (data) => {
            this.sensors.push(data.data.sensor);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
}
