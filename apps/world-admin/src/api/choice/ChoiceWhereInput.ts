import { ChoiceLocaleWhereUniqueInput } from "../choiceLocale/ChoiceLocaleWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ResponseWhereUniqueInput } from "../response/ResponseWhereUniqueInput";

export type ChoiceWhereInput = {
  choiceLocales?: ChoiceLocaleWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  responses?: ResponseWhereUniqueInput;
};
