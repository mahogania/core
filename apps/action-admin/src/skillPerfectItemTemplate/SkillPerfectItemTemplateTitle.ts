import { SkillPerfectItemTemplate as TSkillPerfectItemTemplate } from "../api/skillPerfectItemTemplate/SkillPerfectItemTemplate";

export const SKILLPERFECTITEMTEMPLATE_TITLE_FIELD = "id";

export const SkillPerfectItemTemplateTitle = (
  record: TSkillPerfectItemTemplate
): string => {
  return record.id?.toString() || String(record.id);
};
