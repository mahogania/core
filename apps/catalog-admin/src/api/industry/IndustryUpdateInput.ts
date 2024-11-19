import { BusinessUpdateManyWithoutIndustriesInput } from "./BusinessUpdateManyWithoutIndustriesInput";
import { RelationUpdateManyWithoutIndustriesInput } from "./RelationUpdateManyWithoutIndustriesInput";

export type IndustryUpdateInput = {
  businesses?: BusinessUpdateManyWithoutIndustriesInput;
  relations?: RelationUpdateManyWithoutIndustriesInput;
};
