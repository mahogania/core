import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { ProposalWhereUniqueInput } from "../proposal/ProposalWhereUniqueInput";

export type QuoteWhereInput = {
  id?: StringFilter;
  lineItems?: ItemListRelationFilter;
  proposal?: ProposalWhereUniqueInput;
};
