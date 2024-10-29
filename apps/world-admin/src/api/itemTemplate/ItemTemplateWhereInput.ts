import { StringFilter } from "../../util/StringFilter";
import { ItemBehaviourWhereUniqueInput } from "../itemBehaviour/ItemBehaviourWhereUniqueInput";
import { ItemRandomBonusListTemplateListRelationFilter } from "../itemRandomBonusListTemplate/ItemRandomBonusListTemplateListRelationFilter";
import { ItemTemplateAddonWhereUniqueInput } from "../itemTemplateAddon/ItemTemplateAddonWhereUniqueInput";

export type ItemTemplateWhereInput = {
  id?: StringFilter;
  itemBehaviour?: ItemBehaviourWhereUniqueInput;
  itemRandomBonusListTemplates?: ItemRandomBonusListTemplateListRelationFilter;
  itemTemplateAddons?: ItemTemplateAddonWhereUniqueInput;
};
