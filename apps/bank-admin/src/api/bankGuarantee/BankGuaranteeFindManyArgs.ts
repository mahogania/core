import { BankGuaranteeWhereInput } from "./BankGuaranteeWhereInput";
import { BankGuaranteeOrderByInput } from "./BankGuaranteeOrderByInput";

export type BankGuaranteeFindManyArgs = {
  where?: BankGuaranteeWhereInput;
  orderBy?: Array<BankGuaranteeOrderByInput>;
  skip?: number;
  take?: number;
};
