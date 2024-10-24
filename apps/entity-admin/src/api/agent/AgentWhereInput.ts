import { EntityListRelationFilter } from "../entity/EntityListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AgentWhereInput = {
  entities?: EntityListRelationFilter;
  id?: StringFilter;
};
