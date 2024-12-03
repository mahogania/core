import { SalesOrderItemWhereInput } from "./SalesOrderItemWhereInput";
import { SalesOrderItemOrderByInput } from "./SalesOrderItemOrderByInput";

export type SalesOrderItemFindManyArgs = {
  where?: SalesOrderItemWhereInput;
  orderBy?: Array<SalesOrderItemOrderByInput>;
  skip?: number;
  take?: number;
};
