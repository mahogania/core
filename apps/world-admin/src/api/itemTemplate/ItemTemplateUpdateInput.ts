import { ItemBehaviourWhereUniqueInput } from "../itemBehaviour/ItemBehaviourWhereUniqueInput";
import { ItemRandomBonusListTemplateUpdateManyWithoutItemTemplatesInput } from "./ItemRandomBonusListTemplateUpdateManyWithoutItemTemplatesInput";
import { ItemTemplateAddonWhereUniqueInput } from "../itemTemplateAddon/ItemTemplateAddonWhereUniqueInput";

export type ItemTemplateUpdateInput = {
  itemBehaviour?: ItemBehaviourWhereUniqueInput | null;
  itemRandomBonusListTemplates?: ItemRandomBonusListTemplateUpdateManyWithoutItemTemplatesInput;
  itemTemplateAddons?: ItemTemplateAddonWhereUniqueInput | null;
};
