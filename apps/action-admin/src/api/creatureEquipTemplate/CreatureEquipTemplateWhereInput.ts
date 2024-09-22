import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CreatureEquipTemplateWhereInput = {
  appearanceModId1?: IntNullableFilter;
  appearanceModId2?: IntNullableFilter;
  appearanceModId3?: IntNullableFilter;
  creatureId?: IntNullableFilter;
  id?: StringFilter;
  itemId1?: IntNullableFilter;
  itemId2?: IntNullableFilter;
  itemId3?: IntNullableFilter;
  itemVisual1?: IntNullableFilter;
  itemVisual2?: IntNullableFilter;
  itemVisual3?: IntNullableFilter;
  verifiedBuild?: IntNullableFilter;
};
