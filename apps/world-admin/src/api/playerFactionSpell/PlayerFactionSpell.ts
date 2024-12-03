import { Faction } from "../faction/Faction";
import { Player } from "../player/Player";

export type PlayerFactionSpell = {
  createdAt: Date;
  faction?: Faction | null;
  id: string;
  player?: Player | null;
  updatedAt: Date;
};
