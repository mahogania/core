import { CreatureEquipmentWhereUniqueInput } from "../creatureEquipment/CreatureEquipmentWhereUniqueInput";
import { CreatureFormationWhereUniqueInput } from "../creatureFormation/CreatureFormationWhereUniqueInput";
import { CreatureImmunityWhereUniqueInput } from "../creatureImmunity/CreatureImmunityWhereUniqueInput";
import { CreatureLevelStatWhereUniqueInput } from "../creatureLevelStat/CreatureLevelStatWhereUniqueInput";
import { CreatureLootWhereUniqueInput } from "../creatureLoot/CreatureLootWhereUniqueInput";
import { CreatureModelInfoWhereUniqueInput } from "../creatureModelInfo/CreatureModelInfoWhereUniqueInput";
import { CreatureMovementInfoWhereUniqueInput } from "../creatureMovementInfo/CreatureMovementInfoWhereUniqueInput";

export type CreatureUpdateInput = {
  areaId?: number | null;
  behaviourName?: string;
  creatureEquipments?: CreatureEquipmentWhereUniqueInput | null;
  creatureFormations?: CreatureFormationWhereUniqueInput | null;
  creatureImmunities?: CreatureImmunityWhereUniqueInput | null;
  creatureLevelStats?: CreatureLevelStatWhereUniqueInput | null;
  creatureLoots?: CreatureLootWhereUniqueInput | null;
  creatureModelInfo?: CreatureModelInfoWhereUniqueInput;
  creatureMovementInfos?: CreatureMovementInfoWhereUniqueInput;
  mapId?: number | null;
  modelId?: number | null;
  name?: string;
  realmId?: number | null;
  transformId?: string;
  zoneId?: number | null;
};
