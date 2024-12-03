import { PosClosingEntryTaxes as TPosClosingEntryTaxes } from "../api/posClosingEntryTaxes/PosClosingEntryTaxes";

export const POSCLOSINGENTRYTAXES_TITLE_FIELD = "name";

export const PosClosingEntryTaxesTitle = (
  record: TPosClosingEntryTaxes
): string => {
  return record.name?.toString() || String(record.id);
};
