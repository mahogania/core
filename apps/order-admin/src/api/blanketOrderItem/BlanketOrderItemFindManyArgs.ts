import { BlanketOrderItemWhereInput } from "./BlanketOrderItemWhereInput";
import { BlanketOrderItemOrderByInput } from "./BlanketOrderItemOrderByInput";

export type BlanketOrderItemFindManyArgs = {
  where?: BlanketOrderItemWhereInput;
  orderBy?: Array<BlanketOrderItemOrderByInput>;
  skip?: number;
  take?: number;
};
