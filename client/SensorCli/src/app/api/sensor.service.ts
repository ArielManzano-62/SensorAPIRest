import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:3000/api/v1';
@Injectable({
  providedIn: 'root',
})
export class SensorService {
  constructor(public http: HttpClient) {}

  getSensors(): Observable<any> {
    return this.http.get(`${baseURL}/sensors`);
  }

  addSensor(sensor: any): Observable<any> {
    return this.http.post(`${baseURL}/sensors`, sensor);
  }

  updateSensor(sensor: any): Observable<any> {
    return this.http.patch(`${baseURL}/sensors/${sensor.id}`, sensor);
  }
}
