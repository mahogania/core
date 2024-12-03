import { BomExplosionItem as TBomExplosionItem } from "../api/bomExplosionItem/BomExplosionItem";

export const BOMEXPLOSIONITEM_TITLE_FIELD = "itemName";

export const BomExplosionItemTitle = (record: TBomExplosionItem): string => {
  return record.itemName?.toString() || String(record.id);
};
