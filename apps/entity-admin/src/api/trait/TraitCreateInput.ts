import { CommandCreateNestedManyWithoutTraitsInput } from "./CommandCreateNestedManyWithoutTraitsInput";
import { FragmentCreateNestedManyWithoutTraitsInput } from "./FragmentCreateNestedManyWithoutTraitsInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type TraitCreateInput = {
  commands?: CommandCreateNestedManyWithoutTraitsInput;
  fragments?: FragmentCreateNestedManyWithoutTraitsInput;
  template?: TemplateWhereUniqueInput | null;
};
