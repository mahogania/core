import { BankTransactionMappingWhereInput } from "./BankTransactionMappingWhereInput";
import { BankTransactionMappingOrderByInput } from "./BankTransactionMappingOrderByInput";

export type BankTransactionMappingFindManyArgs = {
  where?: BankTransactionMappingWhereInput;
  orderBy?: Array<BankTransactionMappingOrderByInput>;
  skip?: number;
  take?: number;
};
