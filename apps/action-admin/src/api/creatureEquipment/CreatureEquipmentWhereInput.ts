import { JsonFilter } from "../../util/JsonFilter";
import { CreatureListRelationFilter } from "../creature/CreatureListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CreatureEquipmentWhereInput = {
  appereance?: JsonFilter;
  creatures?: CreatureListRelationFilter;
  id?: StringFilter;
  visual?: JsonFilter;
};
