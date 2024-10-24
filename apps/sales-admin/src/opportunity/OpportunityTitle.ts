import { Opportunity as TOpportunity } from "../api/opportunity/Opportunity";

export const OPPORTUNITY_TITLE_FIELD = "id";

export const OpportunityTitle = (record: TOpportunity): string => {
  return record.id?.toString() || String(record.id);
};
