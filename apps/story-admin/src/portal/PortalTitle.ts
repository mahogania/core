import { Portal as TPortal } from "../api/portal/Portal";

export const PORTAL_TITLE_FIELD = "id";

export const PortalTitle = (record: TPortal): string => {
  return record.id?.toString() || String(record.id);
};
