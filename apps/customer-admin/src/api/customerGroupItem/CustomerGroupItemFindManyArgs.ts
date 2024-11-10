import { CustomerGroupItemWhereInput } from "./CustomerGroupItemWhereInput";
import { CustomerGroupItemOrderByInput } from "./CustomerGroupItemOrderByInput";

export type CustomerGroupItemFindManyArgs = {
  where?: CustomerGroupItemWhereInput;
  orderBy?: Array<CustomerGroupItemOrderByInput>;
  skip?: number;
  take?: number;
};
