import { Competitor as TCompetitor } from "../api/competitor/Competitor";

export const COMPETITOR_TITLE_FIELD = "competitorName";

export const CompetitorTitle = (record: TCompetitor): string => {
  return record.competitorName?.toString() || String(record.id);
};
