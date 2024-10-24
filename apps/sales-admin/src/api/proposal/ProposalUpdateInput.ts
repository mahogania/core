import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { QuoteUpdateManyWithoutProposalsInput } from "./QuoteUpdateManyWithoutProposalsInput";
import { ThreatWhereUniqueInput } from "../threat/ThreatWhereUniqueInput";

export type ProposalUpdateInput = {
  opportunity?: OpportunityWhereUniqueInput | null;
  quotes?: QuoteUpdateManyWithoutProposalsInput;
  threat?: ThreatWhereUniqueInput | null;
};
