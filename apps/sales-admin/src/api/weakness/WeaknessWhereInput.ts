import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { FeatureListRelationFilter } from "../feature/FeatureListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type WeaknessWhereInput = {
  competitor?: BusinessWhereUniqueInput;
  features?: FeatureListRelationFilter;
  id?: StringFilter;
};
