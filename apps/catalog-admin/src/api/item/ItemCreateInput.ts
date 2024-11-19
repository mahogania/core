import { ConfigurationWhereUniqueInput } from "../configuration/ConfigurationWhereUniqueInput";
import { QuoteWhereUniqueInput } from "../quote/QuoteWhereUniqueInput";

export type ItemCreateInput = {
  configuration?: ConfigurationWhereUniqueInput | null;
  quote?: QuoteWhereUniqueInput | null;
};
