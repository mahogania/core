import { AreaTriggerCreatePropertiesSplinePoint as TAreaTriggerCreatePropertiesSplinePoint } from "../api/areaTriggerCreatePropertiesSplinePoint/AreaTriggerCreatePropertiesSplinePoint";

export const AREATRIGGERCREATEPROPERTIESSPLINEPOINT_TITLE_FIELD = "id";

export const AreaTriggerCreatePropertiesSplinePointTitle = (
  record: TAreaTriggerCreatePropertiesSplinePoint
): string => {
  return record.id?.toString() || String(record.id);
};
