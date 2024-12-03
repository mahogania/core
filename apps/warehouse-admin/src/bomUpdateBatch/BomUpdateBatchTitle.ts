import { BomUpdateBatch as TBomUpdateBatch } from "../api/bomUpdateBatch/BomUpdateBatch";

export const BOMUPDATEBATCH_TITLE_FIELD = "name";

export const BomUpdateBatchTitle = (record: TBomUpdateBatch): string => {
  return record.name?.toString() || String(record.id);
};
