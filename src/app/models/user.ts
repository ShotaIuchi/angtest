import { carType } from "src/app/models/carType";
import { userStatus } from "src/app/models/userStatus";

export class User {
  id: Number;
  name: string;
  status: userStatus;
  contact: string;
  type: carType;
}
