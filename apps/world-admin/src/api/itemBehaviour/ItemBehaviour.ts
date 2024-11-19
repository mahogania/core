import { ItemTemplate } from "../itemTemplate/ItemTemplate";

export type ItemBehaviour = {
  createdAt: Date;
  id: string;
  itemTemplates?: Array<ItemTemplate>;
  updatedAt: Date;
};
