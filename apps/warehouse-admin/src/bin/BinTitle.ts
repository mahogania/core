import { Bin as TBin } from "../api/bin/Bin";

export const BIN_TITLE_FIELD = "itemCode";

export const BinTitle = (record: TBin): string => {
  return record.itemCode?.toString() || String(record.id);
};
