import { SortOrder } from "../../util/SortOrder";

export type CreatureOrderByInput = {
  areaId?: SortOrder;
  behaviourName?: SortOrder;
  createdAt?: SortOrder;
  creatureEquipmentsId?: SortOrder;
  creatureFormationsId?: SortOrder;
  creatureImmunitiesId?: SortOrder;
  creatureLevelStatsId?: SortOrder;
  creatureLootsId?: SortOrder;
  creatureModelInfoId?: SortOrder;
  creatureMovementInfosId?: SortOrder;
  id?: SortOrder;
  mapId?: SortOrder;
  modelId?: SortOrder;
  name?: SortOrder;
  realmId?: SortOrder;
  transformId?: SortOrder;
  updatedAt?: SortOrder;
  zoneId?: SortOrder;
};
