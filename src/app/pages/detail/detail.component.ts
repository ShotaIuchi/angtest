import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Geocodinate } from "src/app/models/geocodinate";
import { Place } from "src/app/models/place";

class SIMarker {
  option: google.maps.MarkerOptions;
  position: google.maps.LatLngLiteral;
}

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  items: Place[] = [
    // { name: "大阪駅", geo: new Geocodinate(35.697695, 139.707354) },
    // { name: "新大阪駅", geo: new Geocodinate(35.687695, 139.707354) },
    // { name: "難波駅", geo: new Geocodinate(35.667695, 139.707354) },
  ];

  //constructor() {}

  //ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    this.addMarkerAll();
  }

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

  marker: SIMarker[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        location: event.latLng,
      },
      (results, status) => {
        console.log(results, status);
        this.items.push({
          name: results[0].formatted_address,
          geo: new Geocodinate(event.latLng.lat(), event.latLng.lng()),
        });
        //this.addMarkerAll();
        this.addMarkerItem(event.latLng.lat(), event.latLng.lng());
      }
    );
  }

  addMarkerAll() {
    this.marker = [];
    this.items.forEach((v, i) => {
      this.addMarkerItem(v.geo.lat, v.geo.lng);
    });
  }

  addMarkerItem(aLat: number, aLng: number) {
    this.marker.push({
      option: {
        draggable: true,
        label: (this.marker.length + 1).toString(),
      },
      position: { lat: aLat, lng: aLng },
    });
  }

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp("https://maps.googleapis.com/maps/api/js?key=", "callback")
      .pipe(
        map(() => {
          console.log("map");
          return true;
        }),
        catchError(() => of(false))
      );
  }

  ngOnInit(): void {}

  moveMap(event: google.maps.MapMouseEvent) {
    //this.center = event.latLng.toJSON();
    var n = 0;
    this.marker.forEach((v, i) => {
      if (
        v.position.lat == event.latLng.lat() &&
        v.position.lng == event.latLng.lng()
      ) {
        n = i;
      }
    });
    this.marker.splice(n, 1);

    n = 0;
    this.items.forEach((v, i) => {
      if (v.geo.lat == event.latLng.lat() && v.geo.lng == event.latLng.lng()) {
        n = i;
      }
    });
    this.items.splice(n, 1);
  }

  move(event: google.maps.MapMouseEvent) {
    //this.display = event.latLng.toJSON();
  }
}
