import { GameObjectTemplateWhereUniqueInput } from "../gameObjectTemplate/GameObjectTemplateWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type GameObjectUpdateInput = {
  areaId?: number | null;
  gameObjectTemplate?: GameObjectTemplateWhereUniqueInput | null;
  mapId?: number | null;
  phaseGroupId?: number | null;
  phaseId?: number | null;
  script?: InputJsonValue;
  spawnTime?: Date | null;
  state?: number | null;
  stringId?: string | null;
  transformId?: string;
  version?: number | null;
  zoneId?: number | null;
};
