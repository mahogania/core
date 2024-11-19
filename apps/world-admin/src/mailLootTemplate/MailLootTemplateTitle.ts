import { MailLootTemplate as TMailLootTemplate } from "../api/mailLootTemplate/MailLootTemplate";

export const MAILLOOTTEMPLATE_TITLE_FIELD = "sender";

export const MailLootTemplateTitle = (record: TMailLootTemplate): string => {
  return record.sender?.toString() || String(record.id);
};
