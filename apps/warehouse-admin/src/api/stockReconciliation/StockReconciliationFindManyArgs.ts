import { StockReconciliationWhereInput } from "./StockReconciliationWhereInput";
import { StockReconciliationOrderByInput } from "./StockReconciliationOrderByInput";

export type StockReconciliationFindManyArgs = {
  where?: StockReconciliationWhereInput;
  orderBy?: Array<StockReconciliationOrderByInput>;
  skip?: number;
  take?: number;
};
