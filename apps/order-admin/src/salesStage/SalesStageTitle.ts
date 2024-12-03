import { SalesStage as TSalesStage } from "../api/salesStage/SalesStage";

export const SALESSTAGE_TITLE_FIELD = "name";

export const SalesStageTitle = (record: TSalesStage): string => {
  return record.name?.toString() || String(record.id);
};
