import { Attribute as TAttribute } from "../api/attribute/Attribute";

export const ATTRIBUTE_TITLE_FIELD = "id";

export const AttributeTitle = (record: TAttribute): string => {
  return record.id?.toString() || String(record.id);
};
