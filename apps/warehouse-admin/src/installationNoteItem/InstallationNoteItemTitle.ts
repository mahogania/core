import { InstallationNoteItem as TInstallationNoteItem } from "../api/installationNoteItem/InstallationNoteItem";

export const INSTALLATIONNOTEITEM_TITLE_FIELD = "name";

export const InstallationNoteItemTitle = (
  record: TInstallationNoteItem
): string => {
  return record.name?.toString() || String(record.id);
};
