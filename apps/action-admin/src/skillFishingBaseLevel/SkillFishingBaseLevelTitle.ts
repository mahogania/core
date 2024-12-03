import { SkillFishingBaseLevel as TSkillFishingBaseLevel } from "../api/skillFishingBaseLevel/SkillFishingBaseLevel";

export const SKILLFISHINGBASELEVEL_TITLE_FIELD = "id";

export const SkillFishingBaseLevelTitle = (
  record: TSkillFishingBaseLevel
): string => {
  return record.id?.toString() || String(record.id);
};
