import { SkillExtraItemTemplate as TSkillExtraItemTemplate } from "../api/skillExtraItemTemplate/SkillExtraItemTemplate";

export const SKILLEXTRAITEMTEMPLATE_TITLE_FIELD = "id";

export const SkillExtraItemTemplateTitle = (
  record: TSkillExtraItemTemplate
): string => {
  return record.id?.toString() || String(record.id);
};
