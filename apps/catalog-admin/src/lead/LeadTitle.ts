import { Lead as TLead } from "../api/lead/Lead";

export const LEAD_TITLE_FIELD = "campaignName";

export const LeadTitle = (record: TLead): string => {
  return record.campaignName?.toString() || String(record.id);
};
