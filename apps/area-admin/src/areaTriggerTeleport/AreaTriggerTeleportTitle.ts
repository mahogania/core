import { AreaTriggerTeleport as TAreaTriggerTeleport } from "../api/areaTriggerTeleport/AreaTriggerTeleport";

export const AREATRIGGERTELEPORT_TITLE_FIELD = "name";

export const AreaTriggerTeleportTitle = (
  record: TAreaTriggerTeleport
): string => {
  return record.name?.toString() || String(record.id);
};
