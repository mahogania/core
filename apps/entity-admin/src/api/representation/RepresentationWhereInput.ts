import { EntityListRelationFilter } from "../entity/EntityListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type RepresentationWhereInput = {
  entities?: EntityListRelationFilter;
  id?: StringFilter;
};
