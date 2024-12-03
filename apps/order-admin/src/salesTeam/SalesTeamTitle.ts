import { SalesTeam as TSalesTeam } from "../api/salesTeam/SalesTeam";

export const SALESTEAM_TITLE_FIELD = "name";

export const SalesTeamTitle = (record: TSalesTeam): string => {
  return record.name?.toString() || String(record.id);
};
