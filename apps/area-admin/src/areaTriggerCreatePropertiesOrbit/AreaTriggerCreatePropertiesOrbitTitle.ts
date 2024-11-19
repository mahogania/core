import { AreaTriggerCreatePropertiesOrbit as TAreaTriggerCreatePropertiesOrbit } from "../api/areaTriggerCreatePropertiesOrbit/AreaTriggerCreatePropertiesOrbit";

export const AREATRIGGERCREATEPROPERTIESORBIT_TITLE_FIELD = "id";

export const AreaTriggerCreatePropertiesOrbitTitle = (
  record: TAreaTriggerCreatePropertiesOrbit
): string => {
  return record.id?.toString() || String(record.id);
};
