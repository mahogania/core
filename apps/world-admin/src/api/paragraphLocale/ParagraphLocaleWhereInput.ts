import { StringFilter } from "../../util/StringFilter";
import { ParagraphListRelationFilter } from "../paragraph/ParagraphListRelationFilter";

export type ParagraphLocaleWhereInput = {
  id?: StringFilter;
  paragraphs?: ParagraphListRelationFilter;
};
