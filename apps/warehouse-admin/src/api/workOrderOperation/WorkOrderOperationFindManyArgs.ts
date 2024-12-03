import { WorkOrderOperationWhereInput } from "./WorkOrderOperationWhereInput";
import { WorkOrderOperationOrderByInput } from "./WorkOrderOperationOrderByInput";

export type WorkOrderOperationFindManyArgs = {
  where?: WorkOrderOperationWhereInput;
  orderBy?: Array<WorkOrderOperationOrderByInput>;
  skip?: number;
  take?: number;
};
