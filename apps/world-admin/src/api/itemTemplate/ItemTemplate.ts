import { ItemBehaviour } from "../itemBehaviour/ItemBehaviour";
import { ItemRandomBonusListTemplate } from "../itemRandomBonusListTemplate/ItemRandomBonusListTemplate";
import { ItemTemplateAddon } from "../itemTemplateAddon/ItemTemplateAddon";

export type ItemTemplate = {
  createdAt: Date;
  id: string;
  itemBehaviour?: ItemBehaviour | null;
  itemRandomBonusListTemplates?: Array<ItemRandomBonusListTemplate>;
  itemTemplateAddons?: ItemTemplateAddon | null;
  updatedAt: Date;
};
