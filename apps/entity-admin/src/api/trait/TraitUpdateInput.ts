import { CommandUpdateManyWithoutTraitsInput } from "./CommandUpdateManyWithoutTraitsInput";
import { FragmentUpdateManyWithoutTraitsInput } from "./FragmentUpdateManyWithoutTraitsInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type TraitUpdateInput = {
  commands?: CommandUpdateManyWithoutTraitsInput;
  fragments?: FragmentUpdateManyWithoutTraitsInput;
  template?: TemplateWhereUniqueInput | null;
};
