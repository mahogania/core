import { DrivingLicenseCategory as TDrivingLicenseCategory } from "../api/drivingLicenseCategory/DrivingLicenseCategory";

export const DRIVINGLICENSECATEGORY_TITLE_FIELD = "id";

export const DrivingLicenseCategoryTitle = (
  record: TDrivingLicenseCategory
): string => {
  return record.id?.toString() || String(record.id);
};
