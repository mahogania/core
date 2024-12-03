import { Entity as TEntity } from "../api/entity/Entity";

export const ENTITY_TITLE_FIELD = "displayName";

export const EntityTitle = (record: TEntity): string => {
  return record.displayName?.toString() || String(record.id);
};
