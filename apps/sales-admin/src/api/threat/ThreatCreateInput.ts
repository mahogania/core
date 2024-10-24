import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ProposalCreateNestedManyWithoutThreatsInput } from "./ProposalCreateNestedManyWithoutThreatsInput";

export type ThreatCreateInput = {
  competitor?: BusinessWhereUniqueInput | null;
  proposals?: ProposalCreateNestedManyWithoutThreatsInput;
};
