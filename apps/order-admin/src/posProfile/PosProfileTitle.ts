import { PosProfile as TPosProfile } from "../api/posProfile/PosProfile";

export const POSPROFILE_TITLE_FIELD = "name";

export const PosProfileTitle = (record: TPosProfile): string => {
  return record.name?.toString() || String(record.id);
};
