import { LandedCostVoucher as TLandedCostVoucher } from "../api/landedCostVoucher/LandedCostVoucher";

export const LANDEDCOSTVOUCHER_TITLE_FIELD = "name";

export const LandedCostVoucherTitle = (record: TLandedCostVoucher): string => {
  return record.name?.toString() || String(record.id);
};
