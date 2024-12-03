import { Area } from "../area/Area";
import { Scenario } from "../scenario/Scenario";

export type AreaScenarioTrigger = {
  area?: Area | null;
  createdAt: Date;
  id: string;
  name: string;
  scenario?: Scenario | null;
  updatedAt: Date;
};
