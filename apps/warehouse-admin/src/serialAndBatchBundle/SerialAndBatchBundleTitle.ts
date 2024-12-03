import { SerialAndBatchBundle as TSerialAndBatchBundle } from "../api/serialAndBatchBundle/SerialAndBatchBundle";

export const SERIALANDBATCHBUNDLE_TITLE_FIELD = "itemName";

export const SerialAndBatchBundleTitle = (
  record: TSerialAndBatchBundle
): string => {
  return record.itemName?.toString() || String(record.id);
};
