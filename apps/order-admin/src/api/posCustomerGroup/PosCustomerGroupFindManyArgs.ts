import { PosCustomerGroupWhereInput } from "./PosCustomerGroupWhereInput";
import { PosCustomerGroupOrderByInput } from "./PosCustomerGroupOrderByInput";

export type PosCustomerGroupFindManyArgs = {
  where?: PosCustomerGroupWhereInput;
  orderBy?: Array<PosCustomerGroupOrderByInput>;
  skip?: number;
  take?: number;
};
