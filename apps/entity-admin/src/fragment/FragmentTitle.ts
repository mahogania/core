import { Fragment as TFragment } from "../api/fragment/Fragment";

export const FRAGMENT_TITLE_FIELD = "displayName";

export const FragmentTitle = (record: TFragment): string => {
  return record.displayName?.toString() || String(record.id);
};
