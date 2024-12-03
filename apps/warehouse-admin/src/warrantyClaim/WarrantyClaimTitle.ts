import { WarrantyClaim as TWarrantyClaim } from "../api/warrantyClaim/WarrantyClaim";

export const WARRANTYCLAIM_TITLE_FIELD = "id";

export const WarrantyClaimTitle = (record: TWarrantyClaim): string => {
  return record.id?.toString() || String(record.id);
};
