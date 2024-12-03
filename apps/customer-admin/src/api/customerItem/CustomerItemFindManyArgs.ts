import { CustomerItemWhereInput } from "./CustomerItemWhereInput";
import { CustomerItemOrderByInput } from "./CustomerItemOrderByInput";

export type CustomerItemFindManyArgs = {
  where?: CustomerItemWhereInput;
  orderBy?: Array<CustomerItemOrderByInput>;
  skip?: number;
  take?: number;
};
