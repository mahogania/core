import { AreaTeleportTrigger as TAreaTeleportTrigger } from "../api/areaTeleportTrigger/AreaTeleportTrigger";

export const AREATELEPORTTRIGGER_TITLE_FIELD = "name";

export const AreaTeleportTriggerTitle = (
  record: TAreaTeleportTrigger
): string => {
  return record.name?.toString() || String(record.id);
};
