import { AddressTemplate as TAddressTemplate } from "../api/addressTemplate/AddressTemplate";

export const ADDRESSTEMPLATE_TITLE_FIELD = "name";

export const AddressTemplateTitle = (record: TAddressTemplate): string => {
  return record.name?.toString() || String(record.id);
};
