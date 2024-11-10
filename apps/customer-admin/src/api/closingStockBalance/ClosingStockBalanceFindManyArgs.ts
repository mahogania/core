import { ClosingStockBalanceWhereInput } from "./ClosingStockBalanceWhereInput";
import { ClosingStockBalanceOrderByInput } from "./ClosingStockBalanceOrderByInput";

export type ClosingStockBalanceFindManyArgs = {
  where?: ClosingStockBalanceWhereInput;
  orderBy?: Array<ClosingStockBalanceOrderByInput>;
  skip?: number;
  take?: number;
};
