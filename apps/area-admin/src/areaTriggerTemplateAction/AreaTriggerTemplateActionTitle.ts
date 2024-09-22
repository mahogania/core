import { AreaTriggerTemplateAction as TAreaTriggerTemplateAction } from "../api/areaTriggerTemplateAction/AreaTriggerTemplateAction";

export const AREATRIGGERTEMPLATEACTION_TITLE_FIELD = "id";

export const AreaTriggerTemplateActionTitle = (
  record: TAreaTriggerTemplateAction
): string => {
  return record.id?.toString() || String(record.id);
};
