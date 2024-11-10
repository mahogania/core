import { CustomerCreditLimitWhereInput } from "./CustomerCreditLimitWhereInput";
import { CustomerCreditLimitOrderByInput } from "./CustomerCreditLimitOrderByInput";

export type CustomerCreditLimitFindManyArgs = {
  where?: CustomerCreditLimitWhereInput;
  orderBy?: Array<CustomerCreditLimitOrderByInput>;
  skip?: number;
  take?: number;
};
