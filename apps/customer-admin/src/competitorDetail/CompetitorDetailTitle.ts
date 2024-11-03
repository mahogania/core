import { CompetitorDetail as TCompetitorDetail } from "../api/competitorDetail/CompetitorDetail";

export const COMPETITORDETAIL_TITLE_FIELD = "name";

export const CompetitorDetailTitle = (record: TCompetitorDetail): string => {
  return record.name?.toString() || String(record.id);
};
