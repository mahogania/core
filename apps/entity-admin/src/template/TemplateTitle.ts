import { Template as TTemplate } from "../api/template/Template";

export const TEMPLATE_TITLE_FIELD = "id";

export const TemplateTitle = (record: TTemplate): string => {
  return record.id?.toString() || String(record.id);
};
