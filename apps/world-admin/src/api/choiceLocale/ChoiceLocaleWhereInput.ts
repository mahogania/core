import { ChoiceListRelationFilter } from "../choice/ChoiceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ChoiceLocaleWhereInput = {
  choices?: ChoiceListRelationFilter;
  id?: StringFilter;
};
