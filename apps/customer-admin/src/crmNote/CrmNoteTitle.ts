import { CrmNote as TCrmNote } from "../api/crmNote/CrmNote";

export const CRMNOTE_TITLE_FIELD = "addedBy";

export const CrmNoteTitle = (record: TCrmNote): string => {
  return record.addedBy?.toString() || String(record.id);
};
