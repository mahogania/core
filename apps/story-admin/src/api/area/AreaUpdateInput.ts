import { AreaQuestTriggerUpdateManyWithoutAreasInput } from "./AreaQuestTriggerUpdateManyWithoutAreasInput";
import { AreaScenarioTriggerUpdateManyWithoutAreasInput } from "./AreaScenarioTriggerUpdateManyWithoutAreasInput";
import { AreaTeleportTriggerUpdateManyWithoutAreasInput } from "./AreaTeleportTriggerUpdateManyWithoutAreasInput";
import { ZoneWhereUniqueInput } from "../zone/ZoneWhereUniqueInput";

export type AreaUpdateInput = {
  areaQuestTriggers?: AreaQuestTriggerUpdateManyWithoutAreasInput;
  areaScenarioTriggers?: AreaScenarioTriggerUpdateManyWithoutAreasInput;
  areaTeleportTriggers?: AreaTeleportTriggerUpdateManyWithoutAreasInput;
  zone?: ZoneWhereUniqueInput | null;
};
