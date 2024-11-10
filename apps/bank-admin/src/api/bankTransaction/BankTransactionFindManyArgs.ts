import { BankTransactionWhereInput } from "./BankTransactionWhereInput";
import { BankTransactionOrderByInput } from "./BankTransactionOrderByInput";

export type BankTransactionFindManyArgs = {
  where?: BankTransactionWhereInput;
  orderBy?: Array<BankTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
