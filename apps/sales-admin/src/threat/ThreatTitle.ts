import { Threat as TThreat } from "../api/threat/Threat";

export const THREAT_TITLE_FIELD = "id";

export const ThreatTitle = (record: TThreat): string => {
  return record.id?.toString() || String(record.id);
};
