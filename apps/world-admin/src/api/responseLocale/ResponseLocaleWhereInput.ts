import { StringFilter } from "../../util/StringFilter";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";

export type ResponseLocaleWhereInput = {
  id?: StringFilter;
  responses?: ResponseListRelationFilter;
};
