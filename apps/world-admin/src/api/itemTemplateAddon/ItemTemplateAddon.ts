import { ItemTemplate } from "../itemTemplate/ItemTemplate";

export type ItemTemplateAddon = {
  createdAt: Date;
  id: string;
  itemTemplates?: Array<ItemTemplate>;
  updatedAt: Date;
};
