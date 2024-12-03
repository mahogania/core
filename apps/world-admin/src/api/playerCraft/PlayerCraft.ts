import { Craft } from "../craft/Craft";
import { Player } from "../player/Player";

export type PlayerCraft = {
  craft?: Craft;
  createdAt: Date;
  id: string;
  player?: Player;
  updatedAt: Date;
};
