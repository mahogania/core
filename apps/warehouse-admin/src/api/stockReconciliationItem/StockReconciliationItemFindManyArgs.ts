import { StockReconciliationItemWhereInput } from "./StockReconciliationItemWhereInput";
import { StockReconciliationItemOrderByInput } from "./StockReconciliationItemOrderByInput";

export type StockReconciliationItemFindManyArgs = {
  where?: StockReconciliationItemWhereInput;
  orderBy?: Array<StockReconciliationItemOrderByInput>;
  skip?: number;
  take?: number;
};
