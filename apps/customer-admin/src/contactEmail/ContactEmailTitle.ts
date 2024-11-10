import { ContactEmail as TContactEmail } from "../api/contactEmail/ContactEmail";

export const CONTACTEMAIL_TITLE_FIELD = "name";

export const ContactEmailTitle = (record: TContactEmail): string => {
  return record.name?.toString() || String(record.id);
};
