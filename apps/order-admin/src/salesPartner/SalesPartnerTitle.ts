import { SalesPartner as TSalesPartner } from "../api/salesPartner/SalesPartner";

export const SALESPARTNER_TITLE_FIELD = "name";

export const SalesPartnerTitle = (record: TSalesPartner): string => {
  return record.name?.toString() || String(record.id);
};
