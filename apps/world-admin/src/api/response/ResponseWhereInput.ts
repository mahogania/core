import { ChoiceWhereUniqueInput } from "../choice/ChoiceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { ResponseLocaleWhereUniqueInput } from "../responseLocale/ResponseLocaleWhereUniqueInput";

export type ResponseWhereInput = {
  choice?: ChoiceWhereUniqueInput;
  id?: StringFilter;
  player?: PlayerWhereUniqueInput;
  responseLocales?: ResponseLocaleWhereUniqueInput;
};
