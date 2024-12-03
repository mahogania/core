import { MaintenanceTeamMember as TMaintenanceTeamMember } from "../api/maintenanceTeamMember/MaintenanceTeamMember";

export const MAINTENANCETEAMMEMBER_TITLE_FIELD = "fullName";

export const MaintenanceTeamMemberTitle = (
  record: TMaintenanceTeamMember
): string => {
  return record.fullName?.toString() || String(record.id);
};
