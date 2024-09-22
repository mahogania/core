import { FishingLootTemplate as TFishingLootTemplate } from "../api/fishingLootTemplate/FishingLootTemplate";

export const FISHINGLOOTTEMPLATE_TITLE_FIELD = "comment";

export const FishingLootTemplateTitle = (
  record: TFishingLootTemplate
): string => {
  return record.comment?.toString() || String(record.id);
};
