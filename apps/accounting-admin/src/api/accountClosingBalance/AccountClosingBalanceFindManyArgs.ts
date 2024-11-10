import { AccountClosingBalanceWhereInput } from "./AccountClosingBalanceWhereInput";
import { AccountClosingBalanceOrderByInput } from "./AccountClosingBalanceOrderByInput";

export type AccountClosingBalanceFindManyArgs = {
  where?: AccountClosingBalanceWhereInput;
  orderBy?: Array<AccountClosingBalanceOrderByInput>;
  skip?: number;
  take?: number;
};
