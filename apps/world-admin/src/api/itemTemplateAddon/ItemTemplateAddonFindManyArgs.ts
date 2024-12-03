import { ItemTemplateAddonWhereInput } from "./ItemTemplateAddonWhereInput";
import { ItemTemplateAddonOrderByInput } from "./ItemTemplateAddonOrderByInput";

export type ItemTemplateAddonFindManyArgs = {
  where?: ItemTemplateAddonWhereInput;
  orderBy?: Array<ItemTemplateAddonOrderByInput>;
  skip?: number;
  take?: number;
};
