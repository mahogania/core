import { Player } from "../player/Player";

export type GeneStat = {
  createdAt: Date;
  id: string;
  players?: Array<Player>;
  updatedAt: Date;
};
