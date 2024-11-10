import { Choice } from "../choice/Choice";
import { Player } from "../player/Player";
import { ResponseLocale } from "../responseLocale/ResponseLocale";

export type Response = {
  choice?: Choice;
  createdAt: Date;
  id: string;
  player?: Player | null;
  responseLocales?: ResponseLocale | null;
  updatedAt: Date;
};
