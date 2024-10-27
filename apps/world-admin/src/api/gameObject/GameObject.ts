import { JsonValue } from "type-fest";

export type GameObject = {
  areaId: number | null;
  createdAt: Date;
  id: string;
  mapId: number | null;
  phaseGroupId: number | null;
  phaseId: number | null;
  positionX: string | null;
  positionY: string | null;
  positionZ: string | null;
  rotationW: string | null;
  rotationX: string | null;
  rotationY: string | null;
  rotationZ: string | null;
  script: JsonValue;
  spawnTime: Date | null;
  state: number | null;
  stringId: string | null;
  updatedAt: Date;
  version: number | null;
  zoneId: number | null;
};
