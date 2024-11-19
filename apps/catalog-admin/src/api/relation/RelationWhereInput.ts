import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IndustryWhereUniqueInput } from "../industry/IndustryWhereUniqueInput";

export type RelationWhereInput = {
  ascendantBusiness?: BusinessWhereUniqueInput;
  descendantBusiness?: BusinessWhereUniqueInput;
  id?: StringFilter;
  industry?: IndustryWhereUniqueInput;
  kind?: "Cooperation" | "Competition";
};
