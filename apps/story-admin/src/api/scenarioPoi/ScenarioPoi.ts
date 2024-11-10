import { ScenarioRegion } from "../scenarioRegion/ScenarioRegion";

export type ScenarioPoi = {
  createdAt: Date;
  id: string;
  location: string;
  scenarioRegions?: Array<ScenarioRegion>;
  updatedAt: Date;
};
