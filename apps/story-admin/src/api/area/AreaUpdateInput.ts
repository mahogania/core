import { AreaQuestTriggerUpdateManyWithoutAreasInput } from "./AreaQuestTriggerUpdateManyWithoutAreasInput";
import { AreaScenarioTriggerUpdateManyWithoutAreasInput } from "./AreaScenarioTriggerUpdateManyWithoutAreasInput";
import { AreaTeleportTriggerUpdateManyWithoutAreasInput } from "./AreaTeleportTriggerUpdateManyWithoutAreasInput";

export type AreaUpdateInput = {
  areaQuestTriggers?: AreaQuestTriggerUpdateManyWithoutAreasInput;
  areaScenarioTriggers?: AreaScenarioTriggerUpdateManyWithoutAreasInput;
  areaTeleportTriggers?: AreaTeleportTriggerUpdateManyWithoutAreasInput;
};
