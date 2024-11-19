import { Template as TTemplate } from "../api/template/Template";

export const TEMPLATE_TITLE_FIELD = "url";

export const TemplateTitle = (record: TTemplate): string => {
  return record.url?.toString() || String(record.id);
};
