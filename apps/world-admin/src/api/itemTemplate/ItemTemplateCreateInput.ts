import { ItemBehaviourWhereUniqueInput } from "../itemBehaviour/ItemBehaviourWhereUniqueInput";
import { ItemRandomBonusListTemplateCreateNestedManyWithoutItemTemplatesInput } from "./ItemRandomBonusListTemplateCreateNestedManyWithoutItemTemplatesInput";
import { ItemTemplateAddonWhereUniqueInput } from "../itemTemplateAddon/ItemTemplateAddonWhereUniqueInput";

export type ItemTemplateCreateInput = {
  itemBehaviour?: ItemBehaviourWhereUniqueInput | null;
  itemRandomBonusListTemplates?: ItemRandomBonusListTemplateCreateNestedManyWithoutItemTemplatesInput;
  itemTemplateAddons?: ItemTemplateAddonWhereUniqueInput | null;
};
