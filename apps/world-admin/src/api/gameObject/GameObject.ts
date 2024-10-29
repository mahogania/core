import { GameObjectTemplate } from "../gameObjectTemplate/GameObjectTemplate";
import { JsonValue } from "type-fest";

export type GameObject = {
  areaId: number | null;
  createdAt: Date;
  gameObjectTemplate?: GameObjectTemplate | null;
  id: string;
  mapId: number | null;
  phaseGroupId: number | null;
  phaseId: number | null;
  script: JsonValue;
  spawnTime: Date | null;
  state: number | null;
  stringId: string | null;
  transformId: string;
  updatedAt: Date;
  version: number | null;
  zoneId: number | null;
};
