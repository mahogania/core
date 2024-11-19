import { ItemUpdateManyWithoutQuotesInput } from "./ItemUpdateManyWithoutQuotesInput";
import { ProposalWhereUniqueInput } from "../proposal/ProposalWhereUniqueInput";

export type QuoteUpdateInput = {
  lineItems?: ItemUpdateManyWithoutQuotesInput;
  proposal?: ProposalWhereUniqueInput | null;
};
