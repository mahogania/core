import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { QuoteListRelationFilter } from "../quote/QuoteListRelationFilter";

export type ProposalWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  opportunity?: OpportunityWhereUniqueInput;
  quotes?: QuoteListRelationFilter;
};
