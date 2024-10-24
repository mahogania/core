import { BusinessUpdateManyWithoutOpportunitiesInput } from "./BusinessUpdateManyWithoutOpportunitiesInput";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { OrderUpdateManyWithoutOpportunitiesInput } from "./OrderUpdateManyWithoutOpportunitiesInput";
import { ProposalUpdateManyWithoutOpportunitiesInput } from "./ProposalUpdateManyWithoutOpportunitiesInput";

export type OpportunityUpdateInput = {
  competitor?: BusinessUpdateManyWithoutOpportunitiesInput;
  contact?: ContactWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutOpportunitiesInput;
  proposals?: ProposalUpdateManyWithoutOpportunitiesInput;
};
