import { Faction } from "../faction/Faction";
import { Player } from "../player/Player";

export type PlayerFactionTitle = {
  createdAt: Date;
  faction?: Faction | null;
  id: string;
  player?: Player | null;
  updatedAt: Date;
};
