import { BankAccountTypeWhereInput } from "./BankAccountTypeWhereInput";
import { BankAccountTypeOrderByInput } from "./BankAccountTypeOrderByInput";

export type BankAccountTypeFindManyArgs = {
  where?: BankAccountTypeWhereInput;
  orderBy?: Array<BankAccountTypeOrderByInput>;
  skip?: number;
  take?: number;
};
