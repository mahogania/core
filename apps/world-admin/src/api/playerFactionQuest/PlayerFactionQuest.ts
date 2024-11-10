import { Faction } from "../faction/Faction";
import { Player } from "../player/Player";

export type PlayerFactionQuest = {
  createdAt: Date;
  faction?: Faction | null;
  id: string;
  player?: Player | null;
  questId: string | null;
  state: string | null;
  updatedAt: Date;
};
