import { AllowedDimension as TAllowedDimension } from "../api/allowedDimension/AllowedDimension";

export const ALLOWEDDIMENSION_TITLE_FIELD = "name";

export const AllowedDimensionTitle = (record: TAllowedDimension): string => {
  return record.name?.toString() || String(record.id);
};
