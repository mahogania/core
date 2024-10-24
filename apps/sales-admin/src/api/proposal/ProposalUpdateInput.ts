import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { QuoteUpdateManyWithoutProposalsInput } from "./QuoteUpdateManyWithoutProposalsInput";

export type ProposalUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  opportunity?: OpportunityWhereUniqueInput | null;
  quotes?: QuoteUpdateManyWithoutProposalsInput;
};
