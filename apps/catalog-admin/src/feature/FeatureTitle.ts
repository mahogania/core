import { Feature as TFeature } from "../api/feature/Feature";

export const FEATURE_TITLE_FIELD = "displayName";

export const FeatureTitle = (record: TFeature): string => {
  return record.displayName?.toString() || String(record.id);
};
