import { SortOrder } from "../../util/SortOrder";

export type GameObjectOrderByInput = {
  areaId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  mapId?: SortOrder;
  phaseGroupId?: SortOrder;
  phaseId?: SortOrder;
  positionX?: SortOrder;
  positionY?: SortOrder;
  positionZ?: SortOrder;
  rotationW?: SortOrder;
  rotationX?: SortOrder;
  rotationY?: SortOrder;
  rotationZ?: SortOrder;
  script?: SortOrder;
  spawnTime?: SortOrder;
  state?: SortOrder;
  stringId?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
  zoneId?: SortOrder;
};
