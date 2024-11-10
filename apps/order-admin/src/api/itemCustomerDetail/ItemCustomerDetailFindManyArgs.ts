import { ItemCustomerDetailWhereInput } from "./ItemCustomerDetailWhereInput";
import { ItemCustomerDetailOrderByInput } from "./ItemCustomerDetailOrderByInput";

export type ItemCustomerDetailFindManyArgs = {
  where?: ItemCustomerDetailWhereInput;
  orderBy?: Array<ItemCustomerDetailOrderByInput>;
  skip?: number;
  take?: number;
};
