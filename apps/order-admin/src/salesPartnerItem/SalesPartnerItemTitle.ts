import { SalesPartnerItem as TSalesPartnerItem } from "../api/salesPartnerItem/SalesPartnerItem";

export const SALESPARTNERITEM_TITLE_FIELD = "name";

export const SalesPartnerItemTitle = (record: TSalesPartnerItem): string => {
  return record.name?.toString() || String(record.id);
};
