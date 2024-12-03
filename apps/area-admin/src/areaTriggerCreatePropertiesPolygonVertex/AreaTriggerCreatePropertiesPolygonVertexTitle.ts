import { AreaTriggerCreatePropertiesPolygonVertex as TAreaTriggerCreatePropertiesPolygonVertex } from "../api/areaTriggerCreatePropertiesPolygonVertex/AreaTriggerCreatePropertiesPolygonVertex";

export const AREATRIGGERCREATEPROPERTIESPOLYGONVERTEX_TITLE_FIELD = "id";

export const AreaTriggerCreatePropertiesPolygonVertexTitle = (
  record: TAreaTriggerCreatePropertiesPolygonVertex
): string => {
  return record.id?.toString() || String(record.id);
};
