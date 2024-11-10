import { AttributeUpdateManyWithoutFragmentsInput } from "./AttributeUpdateManyWithoutFragmentsInput";
import { TraitWhereUniqueInput } from "../trait/TraitWhereUniqueInput";
import { ViewUpdateManyWithoutFragmentsInput } from "./ViewUpdateManyWithoutFragmentsInput";

export type FragmentUpdateInput = {
  attributes?: AttributeUpdateManyWithoutFragmentsInput;
  description?: string | null;
  displayName?: string | null;
  name?: string | null;
  trait?: TraitWhereUniqueInput | null;
  views?: ViewUpdateManyWithoutFragmentsInput;
};
