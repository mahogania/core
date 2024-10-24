import { ProposalCreateNestedManyWithoutOpportunitiesInput } from "./ProposalCreateNestedManyWithoutOpportunitiesInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type OpportunityCreateInput = {
  proposals?: ProposalCreateNestedManyWithoutOpportunitiesInput;
  unit?: UnitWhereUniqueInput | null;
};
