import { Faction } from "../faction/Faction";
import { Player } from "../player/Player";

export type PlayerFactionAchievement = {
  createdAt: Date;
  faction?: Faction;
  id: string;
  player?: Player | null;
  updatedAt: Date;
};
