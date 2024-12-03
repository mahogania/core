import { StockLedgerEntryWhereInput } from "./StockLedgerEntryWhereInput";
import { StockLedgerEntryOrderByInput } from "./StockLedgerEntryOrderByInput";

export type StockLedgerEntryFindManyArgs = {
  where?: StockLedgerEntryWhereInput;
  orderBy?: Array<StockLedgerEntryOrderByInput>;
  skip?: number;
  take?: number;
};
