import { StringFilter } from "../../util/StringFilter";
import { ProposalListRelationFilter } from "../proposal/ProposalListRelationFilter";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type OpportunityWhereInput = {
  id?: StringFilter;
  proposals?: ProposalListRelationFilter;
  unit?: UnitWhereUniqueInput;
};
