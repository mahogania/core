import { Craft } from "../craft/Craft";

export type CraftLevelStat = {
  craft?: Craft;
  createdAt: Date;
  id: string;
  level: number | null;
  stat: string;
  updatedAt: Date;
  value: string | null;
};
