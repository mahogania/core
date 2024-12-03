import { CreatureTemplateModelWhereInput } from "./CreatureTemplateModelWhereInput";
import { CreatureTemplateModelOrderByInput } from "./CreatureTemplateModelOrderByInput";

export type CreatureTemplateModelFindManyArgs = {
  where?: CreatureTemplateModelWhereInput;
  orderBy?: Array<CreatureTemplateModelOrderByInput>;
  skip?: number;
  take?: number;
};
