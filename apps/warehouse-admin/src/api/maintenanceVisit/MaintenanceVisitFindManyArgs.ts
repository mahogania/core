import { MaintenanceVisitWhereInput } from "./MaintenanceVisitWhereInput";
import { MaintenanceVisitOrderByInput } from "./MaintenanceVisitOrderByInput";

export type MaintenanceVisitFindManyArgs = {
  where?: MaintenanceVisitWhereInput;
  orderBy?: Array<MaintenanceVisitOrderByInput>;
  skip?: number;
  take?: number;
};
