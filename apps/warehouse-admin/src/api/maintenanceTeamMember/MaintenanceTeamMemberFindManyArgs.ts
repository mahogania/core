import { MaintenanceTeamMemberWhereInput } from "./MaintenanceTeamMemberWhereInput";
import { MaintenanceTeamMemberOrderByInput } from "./MaintenanceTeamMemberOrderByInput";

export type MaintenanceTeamMemberFindManyArgs = {
  where?: MaintenanceTeamMemberWhereInput;
  orderBy?: Array<MaintenanceTeamMemberOrderByInput>;
  skip?: number;
  take?: number;
};
