export class Geocodinate {
  lat: number;
  lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  toJSON(): String {
    return JSON.stringify({
      lat: this.lat,
      lng: this.lng,
    });
  }
}
