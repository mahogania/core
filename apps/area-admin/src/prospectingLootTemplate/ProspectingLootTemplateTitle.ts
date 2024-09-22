import { ProspectingLootTemplate as TProspectingLootTemplate } from "../api/prospectingLootTemplate/ProspectingLootTemplate";

export const PROSPECTINGLOOTTEMPLATE_TITLE_FIELD = "id";

export const ProspectingLootTemplateTitle = (
  record: TProspectingLootTemplate
): string => {
  return record.id?.toString() || String(record.id);
};
