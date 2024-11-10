import { CustomerGroupWhereInput } from "./CustomerGroupWhereInput";
import { CustomerGroupOrderByInput } from "./CustomerGroupOrderByInput";

export type CustomerGroupFindManyArgs = {
  where?: CustomerGroupWhereInput;
  orderBy?: Array<CustomerGroupOrderByInput>;
  skip?: number;
  take?: number;
};
