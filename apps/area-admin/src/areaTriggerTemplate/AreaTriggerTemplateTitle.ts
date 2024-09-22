import { AreaTriggerTemplate as TAreaTriggerTemplate } from "../api/areaTriggerTemplate/AreaTriggerTemplate";

export const AREATRIGGERTEMPLATE_TITLE_FIELD = "id";

export const AreaTriggerTemplateTitle = (
  record: TAreaTriggerTemplate
): string => {
  return record.id?.toString() || String(record.id);
};
