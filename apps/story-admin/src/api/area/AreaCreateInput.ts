import { AreaQuestTriggerCreateNestedManyWithoutAreasInput } from "./AreaQuestTriggerCreateNestedManyWithoutAreasInput";
import { AreaScenarioTriggerCreateNestedManyWithoutAreasInput } from "./AreaScenarioTriggerCreateNestedManyWithoutAreasInput";
import { AreaTeleportTriggerCreateNestedManyWithoutAreasInput } from "./AreaTeleportTriggerCreateNestedManyWithoutAreasInput";

export type AreaCreateInput = {
  areaQuestTriggers?: AreaQuestTriggerCreateNestedManyWithoutAreasInput;
  areaScenarioTriggers?: AreaScenarioTriggerCreateNestedManyWithoutAreasInput;
  areaTeleportTriggers?: AreaTeleportTriggerCreateNestedManyWithoutAreasInput;
};
