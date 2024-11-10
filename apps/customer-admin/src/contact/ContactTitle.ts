import { Contact as TContact } from "../api/contact/Contact";

export const CONTACT_TITLE_FIELD = "companyName";

export const ContactTitle = (record: TContact): string => {
  return record.companyName?.toString() || String(record.id);
};
