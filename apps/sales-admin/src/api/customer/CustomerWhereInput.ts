import { AddressListRelationFilter } from "../address/AddressListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProposalListRelationFilter } from "../proposal/ProposalListRelationFilter";

export type CustomerWhereInput = {
  addresses?: AddressListRelationFilter;
  id?: StringFilter;
  proposals?: ProposalListRelationFilter;
};
