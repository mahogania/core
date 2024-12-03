import { MillingLootTemplate as TMillingLootTemplate } from "../api/millingLootTemplate/MillingLootTemplate";

export const MILLINGLOOTTEMPLATE_TITLE_FIELD = "id";

export const MillingLootTemplateTitle = (
  record: TMillingLootTemplate
): string => {
  return record.id?.toString() || String(record.id);
};
