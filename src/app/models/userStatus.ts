import { CloneVisitor } from "@angular/compiler/src/i18n/i18n_ast";
import {
  faAd,
  faBed,
  faBell,
  faCoffee,
  faDizzy,
  faGhost,
  faPeace,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export class userIcon {
  icon: IconDefinition;
  color: string;
}

export const userStatusIcon: userIcon[] = [
  {
    icon: faGhost,
    color: "green",
  },
  {
    icon: faBed,
    color: "yellow",
  },
  {
    icon: faCoffee,
    color: "pink",
  },
  {
    icon: faBell,
    color: "blue",
  },
  {
    icon: faPeace,
    color: "black",
  },
  {
    icon: faAd,
    color: "purple",
  },
  {
    icon: faDizzy,
    color: "red",
  },
];

export enum userStatus {
  // 不明
  UNKNOWN = 0,
  // 休み
  HOLIDAY,
  // 休憩中
  BREAK,
  // 待機中
  WAIT,
  // 順調
  GOOD,
  // 普通
  NORMAL,
  // 遅延
  DELAY,
}
