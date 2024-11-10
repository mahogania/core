import { FloatFilter } from "../../util/FloatFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CreatureListRelationFilter } from "../creature/CreatureListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type CreatureLootWhereInput = {
  chance?: FloatFilter;
  comment?: StringNullableFilter;
  creatures?: CreatureListRelationFilter;
  id?: StringFilter;
  itemId?: StringFilter;
  maxCount?: IntFilter;
  minCount?: IntFilter;
  questId?: StringNullableFilter;
};
