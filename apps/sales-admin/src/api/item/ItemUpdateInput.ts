import { ConfigurationWhereUniqueInput } from "../configuration/ConfigurationWhereUniqueInput";
import { QuoteWhereUniqueInput } from "../quote/QuoteWhereUniqueInput";

export type ItemUpdateInput = {
  configuration?: ConfigurationWhereUniqueInput | null;
  quote?: QuoteWhereUniqueInput | null;
};
