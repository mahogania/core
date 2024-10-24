import { ConfigurationWhereUniqueInput } from "../configuration/ConfigurationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { QuoteWhereUniqueInput } from "../quote/QuoteWhereUniqueInput";

export type ItemWhereInput = {
  configuration?: ConfigurationWhereUniqueInput;
  id?: StringFilter;
  quote?: QuoteWhereUniqueInput;
};
