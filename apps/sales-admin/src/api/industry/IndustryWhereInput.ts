import { BusinessListRelationFilter } from "../business/BusinessListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RelationListRelationFilter } from "../relation/RelationListRelationFilter";

export type IndustryWhereInput = {
  businesses?: BusinessListRelationFilter;
  id?: StringFilter;
  relations?: RelationListRelationFilter;
};
