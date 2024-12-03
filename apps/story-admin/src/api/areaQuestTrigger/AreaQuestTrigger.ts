import { Area } from "../area/Area";
import { Quest } from "../quest/Quest";

export type AreaQuestTrigger = {
  area?: Area | null;
  createdAt: Date;
  id: string;
  quest?: Quest | null;
  updatedAt: Date;
};
