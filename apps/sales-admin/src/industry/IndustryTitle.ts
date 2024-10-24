import { Industry as TIndustry } from "../api/industry/Industry";

export const INDUSTRY_TITLE_FIELD = "id";

export const IndustryTitle = (record: TIndustry): string => {
  return record.id?.toString() || String(record.id);
};
