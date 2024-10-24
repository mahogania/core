import { BusinessListRelationFilter } from "../business/BusinessListRelationFilter";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ProposalListRelationFilter } from "../proposal/ProposalListRelationFilter";

export type OpportunityWhereInput = {
  competitor?: BusinessListRelationFilter;
  contact?: ContactWhereUniqueInput;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  proposals?: ProposalListRelationFilter;
};
