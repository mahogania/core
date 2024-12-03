import { FinanceBookWhereInput } from "./FinanceBookWhereInput";
import { FinanceBookOrderByInput } from "./FinanceBookOrderByInput";

export type FinanceBookFindManyArgs = {
  where?: FinanceBookWhereInput;
  orderBy?: Array<FinanceBookOrderByInput>;
  skip?: number;
  take?: number;
};
