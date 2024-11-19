import { ItemCreateNestedManyWithoutQuotesInput } from "./ItemCreateNestedManyWithoutQuotesInput";
import { ProposalWhereUniqueInput } from "../proposal/ProposalWhereUniqueInput";

export type QuoteCreateInput = {
  lineItems?: ItemCreateNestedManyWithoutQuotesInput;
  proposal?: ProposalWhereUniqueInput | null;
};
