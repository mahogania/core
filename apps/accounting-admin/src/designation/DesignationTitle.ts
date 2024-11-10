import { Designation as TDesignation } from "../api/designation/Designation";

export const DESIGNATION_TITLE_FIELD = "designationName";

export const DesignationTitle = (record: TDesignation): string => {
  return record.designationName?.toString() || String(record.id);
};
