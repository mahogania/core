import { ScenarioPoi } from "../scenarioPoi/ScenarioPoi";
import { Scenario } from "../scenario/Scenario";

export type ScenarioRegion = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  scenarioPois?: ScenarioPoi | null;
  scenarios?: Array<Scenario>;
  updatedAt: Date;
};
