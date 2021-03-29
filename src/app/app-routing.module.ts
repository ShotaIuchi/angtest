import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { MapComponent } from "./pages/map/map.component";
import { UsersComponent } from "./pages/users/users.component";
import { DetailComponent } from "./pages/detail/detail.component";
import { SettingsComponent } from "./pages/settings/settings.component";

const myRoutes: Routes = [
  { path: "", component: UsersComponent },
  { path: "request", component: DetailComponent },
  { path: "settings", component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(myRoutes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
