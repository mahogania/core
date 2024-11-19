import { ChoiceWhereUniqueInput } from "../choice/ChoiceWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { ResponseLocaleWhereUniqueInput } from "../responseLocale/ResponseLocaleWhereUniqueInput";

export type ResponseCreateInput = {
  choice: ChoiceWhereUniqueInput;
  player?: PlayerWhereUniqueInput | null;
  responseLocales?: ResponseLocaleWhereUniqueInput | null;
};
