import { CreatureTemplateAddonWhereInput } from "./CreatureTemplateAddonWhereInput";
import { CreatureTemplateAddonOrderByInput } from "./CreatureTemplateAddonOrderByInput";

export type CreatureTemplateAddonFindManyArgs = {
  where?: CreatureTemplateAddonWhereInput;
  orderBy?: Array<CreatureTemplateAddonOrderByInput>;
  skip?: number;
  take?: number;
};
