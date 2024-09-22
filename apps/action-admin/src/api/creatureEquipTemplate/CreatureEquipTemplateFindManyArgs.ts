import { CreatureEquipTemplateWhereInput } from "./CreatureEquipTemplateWhereInput";
import { CreatureEquipTemplateOrderByInput } from "./CreatureEquipTemplateOrderByInput";

export type CreatureEquipTemplateFindManyArgs = {
  where?: CreatureEquipTemplateWhereInput;
  orderBy?: Array<CreatureEquipTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
