import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { IndustryWhereUniqueInput } from "../industry/IndustryWhereUniqueInput";

export type RelationUpdateInput = {
  ascendantBusiness?: BusinessWhereUniqueInput | null;
  descendantBusiness?: BusinessWhereUniqueInput | null;
  industry?: IndustryWhereUniqueInput | null;
  kind?: "Cooperation" | "Competition" | null;
};
