import { StockEntryDetailWhereInput } from "./StockEntryDetailWhereInput";
import { StockEntryDetailOrderByInput } from "./StockEntryDetailOrderByInput";

export type StockEntryDetailFindManyArgs = {
  where?: StockEntryDetailWhereInput;
  orderBy?: Array<StockEntryDetailOrderByInput>;
  skip?: number;
  take?: number;
};
