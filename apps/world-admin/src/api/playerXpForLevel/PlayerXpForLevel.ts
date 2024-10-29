import { Player } from "../player/Player";

export type PlayerXpForLevel = {
  createdAt: Date;
  id: string;
  player?: Player | null;
  updatedAt: Date;
};
