import { JournalEntryTemplate as TJournalEntryTemplate } from "../api/journalEntryTemplate/JournalEntryTemplate";

export const JOURNALENTRYTEMPLATE_TITLE_FIELD = "templateTitle";

export const JournalEntryTemplateTitle = (
  record: TJournalEntryTemplate
): string => {
  return record.templateTitle?.toString() || String(record.id);
};
