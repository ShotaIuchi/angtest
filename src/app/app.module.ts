import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FlexLayoutModule } from "@angular/flex-layout";
import { GoogleMapsModule } from "@angular/google-maps";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DetailComponent } from "./pages/detail/detail.component";
import { MapComponent } from "./pages/map/map.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { UsersComponent } from "./pages/users/users.component";
import { UserComponent } from "./parts/user/user.component";
import { UserService } from "./repository/user.service";

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSliderModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    DragDropModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    FontAwesomeModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    MapComponent,
    DetailComponent,
    UsersComponent,
    SettingsComponent,
    UserComponent,
  ],
  exports: [MapComponent],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
