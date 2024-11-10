import { ChoiceLocaleWhereUniqueInput } from "../choiceLocale/ChoiceLocaleWhereUniqueInput";
import { ResponseWhereUniqueInput } from "../response/ResponseWhereUniqueInput";

export type ChoiceUpdateInput = {
  choiceLocales?: ChoiceLocaleWhereUniqueInput | null;
  name?: string | null;
  responses?: ResponseWhereUniqueInput | null;
};
