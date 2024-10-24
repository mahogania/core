import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { FeatureListRelationFilter } from "../feature/FeatureListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type StrengthWhereInput = {
  competitor?: BusinessWhereUniqueInput;
  features?: FeatureListRelationFilter;
  id?: StringFilter;
};
