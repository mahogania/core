import { LfgDungeonTemplate as TLfgDungeonTemplate } from "../api/lfgDungeonTemplate/LfgDungeonTemplate";

export const LFGDUNGEONTEMPLATE_TITLE_FIELD = "id";

export const LfgDungeonTemplateTitle = (
  record: TLfgDungeonTemplate
): string => {
  return record.id?.toString() || String(record.id);
};
