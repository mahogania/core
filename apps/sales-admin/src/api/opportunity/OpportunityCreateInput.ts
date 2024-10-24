import { BusinessCreateNestedManyWithoutOpportunitiesInput } from "./BusinessCreateNestedManyWithoutOpportunitiesInput";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { OrderCreateNestedManyWithoutOpportunitiesInput } from "./OrderCreateNestedManyWithoutOpportunitiesInput";
import { ProposalCreateNestedManyWithoutOpportunitiesInput } from "./ProposalCreateNestedManyWithoutOpportunitiesInput";

export type OpportunityCreateInput = {
  competitor?: BusinessCreateNestedManyWithoutOpportunitiesInput;
  contact?: ContactWhereUniqueInput | null;
  orders?: OrderCreateNestedManyWithoutOpportunitiesInput;
  proposals?: ProposalCreateNestedManyWithoutOpportunitiesInput;
};
