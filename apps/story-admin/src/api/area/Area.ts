import { AreaQuestTrigger } from "../areaQuestTrigger/AreaQuestTrigger";
import { AreaScenarioTrigger } from "../areaScenarioTrigger/AreaScenarioTrigger";
import { AreaTeleportTrigger } from "../areaTeleportTrigger/AreaTeleportTrigger";

export type Area = {
  areaQuestTriggers?: Array<AreaQuestTrigger>;
  areaScenarioTriggers?: Array<AreaScenarioTrigger>;
  areaTeleportTriggers?: Array<AreaTeleportTrigger>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
