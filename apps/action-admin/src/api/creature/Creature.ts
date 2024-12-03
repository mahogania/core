import { CreatureEquipment } from "../creatureEquipment/CreatureEquipment";
import { CreatureFormation } from "../creatureFormation/CreatureFormation";
import { CreatureImmunity } from "../creatureImmunity/CreatureImmunity";
import { CreatureLevelStat } from "../creatureLevelStat/CreatureLevelStat";
import { CreatureLoot } from "../creatureLoot/CreatureLoot";
import { CreatureModelInfo } from "../creatureModelInfo/CreatureModelInfo";
import { CreatureMovementInfo } from "../creatureMovementInfo/CreatureMovementInfo";

export type Creature = {
  areaId: number | null;
  behaviourName: string;
  createdAt: Date;
  creatureEquipments?: CreatureEquipment | null;
  creatureFormations?: CreatureFormation | null;
  creatureImmunities?: CreatureImmunity | null;
  creatureLevelStats?: CreatureLevelStat | null;
  creatureLoots?: CreatureLoot | null;
  creatureModelInfo?: CreatureModelInfo;
  creatureMovementInfos?: CreatureMovementInfo;
  id: string;
  mapId: number | null;
  modelId: number | null;
  name: string;
  realmId: number | null;
  transformId: string;
  updatedAt: Date;
  zoneId: number | null;
};
