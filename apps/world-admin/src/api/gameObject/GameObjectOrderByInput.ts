import { SortOrder } from "../../util/SortOrder";

export type GameObjectOrderByInput = {
  areaId?: SortOrder;
  createdAt?: SortOrder;
  gameObjectTemplateId?: SortOrder;
  id?: SortOrder;
  mapId?: SortOrder;
  phaseGroupId?: SortOrder;
  phaseId?: SortOrder;
  script?: SortOrder;
  spawnTime?: SortOrder;
  state?: SortOrder;
  stringId?: SortOrder;
  transformId?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
  zoneId?: SortOrder;
};
