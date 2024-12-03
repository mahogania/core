import { DynamicLink as TDynamicLink } from "../api/dynamicLink/DynamicLink";

export const DYNAMICLINK_TITLE_FIELD = "linkName";

export const DynamicLinkTitle = (record: TDynamicLink): string => {
  return record.linkName?.toString() || String(record.id);
};
