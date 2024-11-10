import { IndustryType as TIndustryType } from "../api/industryType/IndustryType";

export const INDUSTRYTYPE_TITLE_FIELD = "name";

export const IndustryTypeTitle = (record: TIndustryType): string => {
  return record.name?.toString() || String(record.id);
};
