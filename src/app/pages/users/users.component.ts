import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Observable, timer } from "rxjs";
import { userStatusIcon } from "src/app/models/userStatus";
import { UserService } from "src/app/repository/user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  u = userStatusIcon;

  displayedColumns: string[] = ["id", "name", "type", "status", "contact"];
  dataSource: any;

  constructor(private userService: UserService) {
    userService.update();
    this.updateData();
  }

  ngOnInit(): void {}

  // dummy
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  // dummy

  polling(): Observable<any> {
    return timer(500);
  }

  updateData() {
    if (this.userService.cacheData == null) {
      this.polling().subscribe(() => {
        this.updateData();
      });
    } else {
      this.dataSource = new MatTableDataSource(this.userService.cacheData);
      this.dataSource.sort = this.sort;
    }
  }
}
