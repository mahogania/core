import { Association as TAssociation } from "../api/association/Association";

export const ASSOCIATION_TITLE_FIELD = "displayName";

export const AssociationTitle = (record: TAssociation): string => {
  return record.displayName?.toString() || String(record.id);
};
