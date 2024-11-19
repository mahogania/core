import { SkillDiscoveryTemplate as TSkillDiscoveryTemplate } from "../api/skillDiscoveryTemplate/SkillDiscoveryTemplate";

export const SKILLDISCOVERYTEMPLATE_TITLE_FIELD = "id";

export const SkillDiscoveryTemplateTitle = (
  record: TSkillDiscoveryTemplate
): string => {
  return record.id?.toString() || String(record.id);
};
