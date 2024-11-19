import { LeadSource as TLeadSource } from "../api/leadSource/LeadSource";

export const LEADSOURCE_TITLE_FIELD = "name";

export const LeadSourceTitle = (record: TLeadSource): string => {
  return record.name?.toString() || String(record.id);
};
