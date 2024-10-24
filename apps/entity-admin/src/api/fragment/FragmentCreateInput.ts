import { AttributeCreateNestedManyWithoutFragmentsInput } from "./AttributeCreateNestedManyWithoutFragmentsInput";
import { TraitWhereUniqueInput } from "../trait/TraitWhereUniqueInput";
import { ViewCreateNestedManyWithoutFragmentsInput } from "./ViewCreateNestedManyWithoutFragmentsInput";

export type FragmentCreateInput = {
  attributes?: AttributeCreateNestedManyWithoutFragmentsInput;
  description?: string | null;
  displayName?: string | null;
  name?: string | null;
  trait?: TraitWhereUniqueInput | null;
  views?: ViewCreateNestedManyWithoutFragmentsInput;
};
