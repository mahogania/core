import { BattlefieldTemplate as TBattlefieldTemplate } from "../api/battlefieldTemplate/BattlefieldTemplate";

export const BATTLEFIELDTEMPLATE_TITLE_FIELD = "id";

export const BattlefieldTemplateTitle = (
  record: TBattlefieldTemplate
): string => {
  return record.id?.toString() || String(record.id);
};
