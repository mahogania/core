import { SkillTiers as TSkillTiers } from "../api/skillTiers/SkillTiers";

export const SKILLTIERS_TITLE_FIELD = "id";

export const SkillTiersTitle = (record: TSkillTiers): string => {
  return record.id?.toString() || String(record.id);
};
