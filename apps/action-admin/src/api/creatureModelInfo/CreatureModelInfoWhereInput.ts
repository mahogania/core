import { FloatFilter } from "../../util/FloatFilter";
import { CreatureListRelationFilter } from "../creature/CreatureListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CreatureModelInfoWhereInput = {
  boundRadius?: FloatFilter;
  combatRadius?: FloatFilter;
  creatures?: CreatureListRelationFilter;
  displayId?: StringFilter;
  id?: StringFilter;
};
