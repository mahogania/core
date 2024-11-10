import { AmendedDocumentNamingSettings as TAmendedDocumentNamingSettings } from "../api/amendedDocumentNamingSettings/AmendedDocumentNamingSettings";

export const AMENDEDDOCUMENTNAMINGSETTINGS_TITLE_FIELD = "name";

export const AmendedDocumentNamingSettingsTitle = (
  record: TAmendedDocumentNamingSettings
): string => {
  return record.name?.toString() || String(record.id);
};
