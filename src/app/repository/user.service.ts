import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { POKEMONS } from "src/app/models/pokedex";
import { User } from "src/app/models/user";
import { carType } from "../models/carType";

@Injectable({
  providedIn: "root",
})
export class UserService {
  pokemons = POKEMONS;

  cacheData: User[];

  constructor(private firestore: AngularFirestore) {}

  update() {
    // this.cacheData = null
    // this.firestore.collection('items').valueChanges().subscribe(res => {
    //   console.log(UserService.name, "update", Date())
    //   var tmp: User[] = []
    //   res.forEach(data => tmp.push({
    //     name: data['name'],
    //     status: data['status'],
    //     contact: data['contact'],
    //     type: data['type'],
    //   }))
    //   this.cacheData = tmp
    // })

    // dummy
    this.createTestData();
    // dummy
  }

  createTestData() {
    var tmp: User[] = [];
    for (var i = 0; i < 30; i++) {
      var p = this.pokemons[i];
      tmp.push({
        id: p.id,
        name: p.name.japanese,
        status: p.id % 7,
        contact: "092893028" + p.id,
        type: Object.values(carType)[p.id % 5],
      });
    }
    this.cacheData = tmp;
  }
}
