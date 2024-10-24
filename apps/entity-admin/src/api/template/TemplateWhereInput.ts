import { EntityListRelationFilter } from "../entity/EntityListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TraitListRelationFilter } from "../trait/TraitListRelationFilter";

export type TemplateWhereInput = {
  entities?: EntityListRelationFilter;
  id?: StringFilter;
  traits?: TraitListRelationFilter;
};
