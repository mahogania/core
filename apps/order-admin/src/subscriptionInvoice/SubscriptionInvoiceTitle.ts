import { SubscriptionInvoice as TSubscriptionInvoice } from "../api/subscriptionInvoice/SubscriptionInvoice";

export const SUBSCRIPTIONINVOICE_TITLE_FIELD = "id";

export const SubscriptionInvoiceTitle = (
  record: TSubscriptionInvoice
): string => {
  return record.id?.toString() || String(record.id);
};
