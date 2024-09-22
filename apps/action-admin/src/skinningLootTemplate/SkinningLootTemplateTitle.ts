import { SkinningLootTemplate as TSkinningLootTemplate } from "../api/skinningLootTemplate/SkinningLootTemplate";

export const SKINNINGLOOTTEMPLATE_TITLE_FIELD = "id";

export const SkinningLootTemplateTitle = (
  record: TSkinningLootTemplate
): string => {
  return record.id?.toString() || String(record.id);
};
