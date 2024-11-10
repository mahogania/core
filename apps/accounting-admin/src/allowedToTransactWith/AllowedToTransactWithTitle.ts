import { AllowedToTransactWith as TAllowedToTransactWith } from "../api/allowedToTransactWith/AllowedToTransactWith";

export const ALLOWEDTOTRANSACTWITH_TITLE_FIELD = "name";

export const AllowedToTransactWithTitle = (
  record: TAllowedToTransactWith
): string => {
  return record.name?.toString() || String(record.id);
};
