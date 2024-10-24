import { Representation as TRepresentation } from "../api/representation/Representation";

export const REPRESENTATION_TITLE_FIELD = "id";

export const RepresentationTitle = (record: TRepresentation): string => {
  return record.id?.toString() || String(record.id);
};
