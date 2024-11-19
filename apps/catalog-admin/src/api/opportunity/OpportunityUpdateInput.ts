import { ProposalUpdateManyWithoutOpportunitiesInput } from "./ProposalUpdateManyWithoutOpportunitiesInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type OpportunityUpdateInput = {
  proposals?: ProposalUpdateManyWithoutOpportunitiesInput;
  unit?: UnitWhereUniqueInput | null;
};
