import { ClosedDocument as TClosedDocument } from "../api/closedDocument/ClosedDocument";

export const CLOSEDDOCUMENT_TITLE_FIELD = "documentType";

export const ClosedDocumentTitle = (record: TClosedDocument): string => {
  return record.documentType?.toString() || String(record.id);
};
