import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { QuoteCreateNestedManyWithoutProposalsInput } from "./QuoteCreateNestedManyWithoutProposalsInput";

export type ProposalCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  opportunity?: OpportunityWhereUniqueInput | null;
  quotes?: QuoteCreateNestedManyWithoutProposalsInput;
};
