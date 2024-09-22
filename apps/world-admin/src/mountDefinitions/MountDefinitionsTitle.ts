import { MountDefinitions as TMountDefinitions } from "../api/mountDefinitions/MountDefinitions";

export const MOUNTDEFINITIONS_TITLE_FIELD = "id";

export const MountDefinitionsTitle = (record: TMountDefinitions): string => {
  return record.id?.toString() || String(record.id);
};
