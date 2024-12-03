import { ChoiceLocaleWhereUniqueInput } from "../choiceLocale/ChoiceLocaleWhereUniqueInput";
import { ResponseWhereUniqueInput } from "../response/ResponseWhereUniqueInput";

export type ChoiceCreateInput = {
  choiceLocales?: ChoiceLocaleWhereUniqueInput | null;
  name?: string | null;
  responses: ResponseWhereUniqueInput | null;
};
