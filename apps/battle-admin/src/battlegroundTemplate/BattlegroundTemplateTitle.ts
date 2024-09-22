import { BattlegroundTemplate as TBattlegroundTemplate } from "../api/battlegroundTemplate/BattlegroundTemplate";

export const BATTLEGROUNDTEMPLATE_TITLE_FIELD = "id";

export const BattlegroundTemplateTitle = (
  record: TBattlegroundTemplate
): string => {
  return record.id?.toString() || String(record.id);
};
