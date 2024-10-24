import { StringFilter } from "../../util/StringFilter";
import { OpportunityListRelationFilter } from "../opportunity/OpportunityListRelationFilter";

export type ContactWhereInput = {
  id?: StringFilter;
  opportunities?: OpportunityListRelationFilter;
};
