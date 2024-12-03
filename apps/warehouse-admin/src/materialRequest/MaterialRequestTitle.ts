import { MaterialRequest as TMaterialRequest } from "../api/materialRequest/MaterialRequest";

export const MATERIALREQUEST_TITLE_FIELD = "id";

export const MaterialRequestTitle = (record: TMaterialRequest): string => {
  return record.id?.toString() || String(record.id);
};
