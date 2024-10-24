import { EntityCreateNestedManyWithoutTemplatesInput } from "./EntityCreateNestedManyWithoutTemplatesInput";
import { TraitCreateNestedManyWithoutTemplatesInput } from "./TraitCreateNestedManyWithoutTemplatesInput";

export type TemplateCreateInput = {
  entities?: EntityCreateNestedManyWithoutTemplatesInput;
  traits?: TraitCreateNestedManyWithoutTemplatesInput;
};
