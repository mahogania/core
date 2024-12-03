import { StockEntryTypeWhereInput } from "./StockEntryTypeWhereInput";
import { StockEntryTypeOrderByInput } from "./StockEntryTypeOrderByInput";

export type StockEntryTypeFindManyArgs = {
  where?: StockEntryTypeWhereInput;
  orderBy?: Array<StockEntryTypeOrderByInput>;
  skip?: number;
  take?: number;
};
