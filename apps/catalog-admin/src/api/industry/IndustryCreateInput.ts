import { BusinessCreateNestedManyWithoutIndustriesInput } from "./BusinessCreateNestedManyWithoutIndustriesInput";
import { RelationCreateNestedManyWithoutIndustriesInput } from "./RelationCreateNestedManyWithoutIndustriesInput";

export type IndustryCreateInput = {
  businesses?: BusinessCreateNestedManyWithoutIndustriesInput;
  relations?: RelationCreateNestedManyWithoutIndustriesInput;
};
