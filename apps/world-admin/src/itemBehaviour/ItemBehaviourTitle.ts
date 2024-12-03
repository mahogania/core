import { ItemBehaviour as TItemBehaviour } from "../api/itemBehaviour/ItemBehaviour";

export const ITEMBEHAVIOUR_TITLE_FIELD = "id";

export const ItemBehaviourTitle = (record: TItemBehaviour): string => {
  return record.id?.toString() || String(record.id);
};
