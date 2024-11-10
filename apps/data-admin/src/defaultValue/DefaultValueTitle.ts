import { DefaultValue as TDefaultValue } from "../api/defaultValue/DefaultValue";

export const DEFAULTVALUE_TITLE_FIELD = "name";

export const DefaultValueTitle = (record: TDefaultValue): string => {
  return record.name?.toString() || String(record.id);
};
