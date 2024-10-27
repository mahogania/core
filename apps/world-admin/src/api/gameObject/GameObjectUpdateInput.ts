import { InputJsonValue } from "../../types";

export type GameObjectUpdateInput = {
  areaId?: number | null;
  mapId?: number | null;
  phaseGroupId?: number | null;
  phaseId?: number | null;
  positionX?: string | null;
  positionY?: string | null;
  positionZ?: string | null;
  rotationW?: string | null;
  rotationX?: string | null;
  rotationY?: string | null;
  rotationZ?: string | null;
  script?: InputJsonValue;
  spawnTime?: Date | null;
  state?: number | null;
  stringId?: string | null;
  version?: number | null;
  zoneId?: number | null;
};
