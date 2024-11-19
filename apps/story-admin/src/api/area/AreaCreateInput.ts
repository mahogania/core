import { AreaQuestTriggerCreateNestedManyWithoutAreasInput } from "./AreaQuestTriggerCreateNestedManyWithoutAreasInput";
import { AreaScenarioTriggerCreateNestedManyWithoutAreasInput } from "./AreaScenarioTriggerCreateNestedManyWithoutAreasInput";
import { AreaTeleportTriggerCreateNestedManyWithoutAreasInput } from "./AreaTeleportTriggerCreateNestedManyWithoutAreasInput";
import { ZoneWhereUniqueInput } from "../zone/ZoneWhereUniqueInput";

export type AreaCreateInput = {
  areaQuestTriggers?: AreaQuestTriggerCreateNestedManyWithoutAreasInput;
  areaScenarioTriggers?: AreaScenarioTriggerCreateNestedManyWithoutAreasInput;
  areaTeleportTriggers?: AreaTeleportTriggerCreateNestedManyWithoutAreasInput;
  zone?: ZoneWhereUniqueInput | null;
};
