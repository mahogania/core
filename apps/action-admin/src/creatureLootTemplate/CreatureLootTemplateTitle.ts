import { CreatureLootTemplate as TCreatureLootTemplate } from "../api/creatureLootTemplate/CreatureLootTemplate";

export const CREATURELOOTTEMPLATE_TITLE_FIELD = "comment";

export const CreatureLootTemplateTitle = (
  record: TCreatureLootTemplate
): string => {
  return record.comment?.toString() || String(record.id);
};
