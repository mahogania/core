import { LandedCostItem as TLandedCostItem } from "../api/landedCostItem/LandedCostItem";

export const LANDEDCOSTITEM_TITLE_FIELD = "name";

export const LandedCostItemTitle = (record: TLandedCostItem): string => {
  return record.name?.toString() || String(record.id);
};
