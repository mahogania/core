import { View as TView } from "../api/view/View";

export const VIEW_TITLE_FIELD = "id";

export const ViewTitle = (record: TView): string => {
  return record.id?.toString() || String(record.id);
};
