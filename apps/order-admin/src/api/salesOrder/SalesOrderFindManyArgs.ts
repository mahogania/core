import { SalesOrderWhereInput } from "./SalesOrderWhereInput";
import { SalesOrderOrderByInput } from "./SalesOrderOrderByInput";

export type SalesOrderFindManyArgs = {
  where?: SalesOrderWhereInput;
  orderBy?: Array<SalesOrderOrderByInput>;
  skip?: number;
  take?: number;
};
