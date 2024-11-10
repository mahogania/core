import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { CreatureEquipmentWhereUniqueInput } from "../creatureEquipment/CreatureEquipmentWhereUniqueInput";
import { CreatureFormationWhereUniqueInput } from "../creatureFormation/CreatureFormationWhereUniqueInput";
import { CreatureImmunityWhereUniqueInput } from "../creatureImmunity/CreatureImmunityWhereUniqueInput";
import { CreatureLevelStatWhereUniqueInput } from "../creatureLevelStat/CreatureLevelStatWhereUniqueInput";
import { CreatureLootWhereUniqueInput } from "../creatureLoot/CreatureLootWhereUniqueInput";
import { CreatureModelInfoWhereUniqueInput } from "../creatureModelInfo/CreatureModelInfoWhereUniqueInput";
import { CreatureMovementInfoWhereUniqueInput } from "../creatureMovementInfo/CreatureMovementInfoWhereUniqueInput";

export type CreatureWhereInput = {
  areaId?: IntNullableFilter;
  behaviourName?: StringFilter;
  creatureEquipments?: CreatureEquipmentWhereUniqueInput;
  creatureFormations?: CreatureFormationWhereUniqueInput;
  creatureImmunities?: CreatureImmunityWhereUniqueInput;
  creatureLevelStats?: CreatureLevelStatWhereUniqueInput;
  creatureLoots?: CreatureLootWhereUniqueInput;
  creatureModelInfo?: CreatureModelInfoWhereUniqueInput;
  creatureMovementInfos?: CreatureMovementInfoWhereUniqueInput;
  id?: StringFilter;
  mapId?: IntNullableFilter;
  modelId?: IntNullableFilter;
  name?: StringFilter;
  realmId?: IntNullableFilter;
  transformId?: StringFilter;
  zoneId?: IntNullableFilter;
};
