import { ContactPhone as TContactPhone } from "../api/contactPhone/ContactPhone";

export const CONTACTPHONE_TITLE_FIELD = "name";

export const ContactPhoneTitle = (record: TContactPhone): string => {
  return record.name?.toString() || String(record.id);
};
