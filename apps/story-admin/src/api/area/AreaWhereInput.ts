import { AreaQuestTriggerListRelationFilter } from "../areaQuestTrigger/AreaQuestTriggerListRelationFilter";
import { AreaScenarioTriggerListRelationFilter } from "../areaScenarioTrigger/AreaScenarioTriggerListRelationFilter";
import { AreaTeleportTriggerListRelationFilter } from "../areaTeleportTrigger/AreaTeleportTriggerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AreaWhereInput = {
  areaQuestTriggers?: AreaQuestTriggerListRelationFilter;
  areaScenarioTriggers?: AreaScenarioTriggerListRelationFilter;
  areaTeleportTriggers?: AreaTeleportTriggerListRelationFilter;
  id?: StringFilter;
};
