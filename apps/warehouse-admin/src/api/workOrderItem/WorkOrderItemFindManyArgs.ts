import { WorkOrderItemWhereInput } from "./WorkOrderItemWhereInput";
import { WorkOrderItemOrderByInput } from "./WorkOrderItemOrderByInput";

export type WorkOrderItemFindManyArgs = {
  where?: WorkOrderItemWhereInput;
  orderBy?: Array<WorkOrderItemOrderByInput>;
  skip?: number;
  take?: number;
};
