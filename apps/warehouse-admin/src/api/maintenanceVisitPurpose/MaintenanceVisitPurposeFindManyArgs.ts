import { MaintenanceVisitPurposeWhereInput } from "./MaintenanceVisitPurposeWhereInput";
import { MaintenanceVisitPurposeOrderByInput } from "./MaintenanceVisitPurposeOrderByInput";

export type MaintenanceVisitPurposeFindManyArgs = {
  where?: MaintenanceVisitPurposeWhereInput;
  orderBy?: Array<MaintenanceVisitPurposeOrderByInput>;
  skip?: number;
  take?: number;
};
