import { MaintenanceScheduleItemWhereInput } from "./MaintenanceScheduleItemWhereInput";
import { MaintenanceScheduleItemOrderByInput } from "./MaintenanceScheduleItemOrderByInput";

export type MaintenanceScheduleItemFindManyArgs = {
  where?: MaintenanceScheduleItemWhereInput;
  orderBy?: Array<MaintenanceScheduleItemOrderByInput>;
  skip?: number;
  take?: number;
};
