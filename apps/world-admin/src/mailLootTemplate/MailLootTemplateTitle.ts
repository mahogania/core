import { MailLootTemplate as TMailLootTemplate } from "../api/mailLootTemplate/MailLootTemplate";

export const MAILLOOTTEMPLATE_TITLE_FIELD = "id";

export const MailLootTemplateTitle = (record: TMailLootTemplate): string => {
  return record.id?.toString() || String(record.id);
};
