import { StringFilter } from "../../util/StringFilter";
import { ProcessWhereUniqueInput } from "../process/ProcessWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { TemplateListRelationFilter } from "../template/TemplateListRelationFilter";

export type FormWhereInput = {
  id?: StringFilter;
  process?: ProcessWhereUniqueInput;
  schema?: JsonFilter;
  templates?: TemplateListRelationFilter;
};
