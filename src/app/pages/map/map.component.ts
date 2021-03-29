import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Place } from "src/app/models/place";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements OnInit {
  zoom = 16;

  center: google.maps.LatLngLiteral = {
    lat: 35.697695,
    lng: 139.707354,
  };

  options: google.maps.MapOptions = {
    disableDefaultUI: true,
    //fullscreenControl: true
  };

  apiLoaded: Observable<boolean>;

  display: google.maps.LatLngLiteral;

  markerOptions: google.maps.MarkerOptions = { draggable: true };
  markerPositions: google.maps.LatLngLiteral[] = [];

  @Input("point") point: Place[];

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp("https://maps.googleapis.com/maps/api/js?key=", "callback")
      .pipe(
        map(() => {
          console.log("map");
          this.point.forEach((v) => {
            this.markerPositions.push({ lat: v.geo.lat, lng: v.geo.lng });
          });
          return true;
        }),
        catchError(() => of(false))
      );
  }

  ngOnInit(): void {}

  moveMap(event: google.maps.MapMouseEvent) {
    //this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng.toJSON();
  }
}
