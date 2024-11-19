import { JsonFilter } from "../../util/JsonFilter";
import { FormWhereUniqueInput } from "../form/FormWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TemplateWhereInput = {
  fields?: JsonFilter;
  form?: FormWhereUniqueInput;
  id?: StringFilter;
  url?: StringNullableFilter;
};
