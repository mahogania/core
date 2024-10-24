import { Bundle as TBundle } from "../api/bundle/Bundle";

export const BUNDLE_TITLE_FIELD = "id";

export const BundleTitle = (record: TBundle): string => {
  return record.id?.toString() || String(record.id);
};
