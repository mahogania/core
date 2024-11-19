import { LinkedRespawn as TLinkedRespawn } from "../api/linkedRespawn/LinkedRespawn";

export const LINKEDRESPAWN_TITLE_FIELD = "id";

export const LinkedRespawnTitle = (record: TLinkedRespawn): string => {
  return record.id?.toString() || String(record.id);
};
