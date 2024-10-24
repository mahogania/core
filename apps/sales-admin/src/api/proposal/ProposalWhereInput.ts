import { StringFilter } from "../../util/StringFilter";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { QuoteListRelationFilter } from "../quote/QuoteListRelationFilter";
import { ThreatWhereUniqueInput } from "../threat/ThreatWhereUniqueInput";

export type ProposalWhereInput = {
  id?: StringFilter;
  opportunity?: OpportunityWhereUniqueInput;
  quotes?: QuoteListRelationFilter;
  threat?: ThreatWhereUniqueInput;
};
