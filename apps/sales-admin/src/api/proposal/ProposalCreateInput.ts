import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { QuoteCreateNestedManyWithoutProposalsInput } from "./QuoteCreateNestedManyWithoutProposalsInput";
import { ThreatWhereUniqueInput } from "../threat/ThreatWhereUniqueInput";

export type ProposalCreateInput = {
  opportunity?: OpportunityWhereUniqueInput | null;
  quotes?: QuoteCreateNestedManyWithoutProposalsInput;
  threat?: ThreatWhereUniqueInput | null;
};
