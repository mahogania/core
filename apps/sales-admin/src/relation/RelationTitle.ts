import { Relation as TRelation } from "../api/relation/Relation";

export const RELATION_TITLE_FIELD = "id";

export const RelationTitle = (record: TRelation): string => {
  return record.id?.toString() || String(record.id);
};
