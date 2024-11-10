import { PosProfileUser as TPosProfileUser } from "../api/posProfileUser/PosProfileUser";

export const POSPROFILEUSER_TITLE_FIELD = "name";

export const PosProfileUserTitle = (record: TPosProfileUser): string => {
  return record.name?.toString() || String(record.id);
};
