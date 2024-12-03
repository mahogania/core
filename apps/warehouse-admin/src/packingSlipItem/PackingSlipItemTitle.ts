import { PackingSlipItem as TPackingSlipItem } from "../api/packingSlipItem/PackingSlipItem";

export const PACKINGSLIPITEM_TITLE_FIELD = "itemName";

export const PackingSlipItemTitle = (record: TPackingSlipItem): string => {
  return record.itemName?.toString() || String(record.id);
};
