import { BankTransactionPaymentsWhereInput } from "./BankTransactionPaymentsWhereInput";
import { BankTransactionPaymentsOrderByInput } from "./BankTransactionPaymentsOrderByInput";

export type BankTransactionPaymentsFindManyArgs = {
  where?: BankTransactionPaymentsWhereInput;
  orderBy?: Array<BankTransactionPaymentsOrderByInput>;
  skip?: number;
  take?: number;
};
