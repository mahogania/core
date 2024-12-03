import { ItemTemplate } from "../itemTemplate/ItemTemplate";

export type ItemRandomBonusListTemplate = {
  createdAt: Date;
  id: string;
  itemTemplate?: ItemTemplate | null;
  updatedAt: Date;
};
