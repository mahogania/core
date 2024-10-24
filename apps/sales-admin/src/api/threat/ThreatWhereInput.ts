import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProposalListRelationFilter } from "../proposal/ProposalListRelationFilter";

export type ThreatWhereInput = {
  competitor?: BusinessWhereUniqueInput;
  id?: StringFilter;
  proposals?: ProposalListRelationFilter;
};
