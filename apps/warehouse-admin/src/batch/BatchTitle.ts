import { Batch as TBatch } from "../api/batch/Batch";

export const BATCH_TITLE_FIELD = "itemName";

export const BatchTitle = (record: TBatch): string => {
  return record.itemName?.toString() || String(record.id);
};
