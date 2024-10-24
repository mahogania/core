import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ProposalUpdateManyWithoutThreatsInput } from "./ProposalUpdateManyWithoutThreatsInput";

export type ThreatUpdateInput = {
  competitor?: BusinessWhereUniqueInput | null;
  proposals?: ProposalUpdateManyWithoutThreatsInput;
};
