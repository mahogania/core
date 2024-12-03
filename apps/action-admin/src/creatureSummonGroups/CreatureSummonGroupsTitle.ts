import { CreatureSummonGroups as TCreatureSummonGroups } from "../api/creatureSummonGroups/CreatureSummonGroups";

export const CREATURESUMMONGROUPS_TITLE_FIELD = "id";

export const CreatureSummonGroupsTitle = (
  record: TCreatureSummonGroups
): string => {
  return record.id?.toString() || String(record.id);
};
