import { ItemGroup as TItemGroup } from "../api/itemGroup/ItemGroup";

export const ITEMGROUP_TITLE_FIELD = "itemGroupName";

export const ItemGroupTitle = (record: TItemGroup): string => {
  return record.itemGroupName?.toString() || String(record.id);
};
