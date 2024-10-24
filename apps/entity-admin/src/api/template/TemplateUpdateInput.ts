import { EntityUpdateManyWithoutTemplatesInput } from "./EntityUpdateManyWithoutTemplatesInput";
import { TraitUpdateManyWithoutTemplatesInput } from "./TraitUpdateManyWithoutTemplatesInput";

export type TemplateUpdateInput = {
  entities?: EntityUpdateManyWithoutTemplatesInput;
  traits?: TraitUpdateManyWithoutTemplatesInput;
};
