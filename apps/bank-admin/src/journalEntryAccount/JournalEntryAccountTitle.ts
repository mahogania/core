import { JournalEntryAccount as TJournalEntryAccount } from "../api/journalEntryAccount/JournalEntryAccount";

export const JOURNALENTRYACCOUNT_TITLE_FIELD = "referenceName";

export const JournalEntryAccountTitle = (
  record: TJournalEntryAccount
): string => {
  return record.referenceName?.toString() || String(record.id);
};
