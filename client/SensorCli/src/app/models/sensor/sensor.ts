export class Sensor {
  _id: string = '';
  name: string = '';
  location: Location = new Location();
  valueMax: number = 0;
  valueMin: number = 0;
  active: boolean = true;
}

class Location {
  latitude: number = 0;
  longitude: number = 0;
}
