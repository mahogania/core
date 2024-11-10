import { BankAccountSubtypeWhereInput } from "./BankAccountSubtypeWhereInput";
import { BankAccountSubtypeOrderByInput } from "./BankAccountSubtypeOrderByInput";

export type BankAccountSubtypeFindManyArgs = {
  where?: BankAccountSubtypeWhereInput;
  orderBy?: Array<BankAccountSubtypeOrderByInput>;
  skip?: number;
  take?: number;
};
