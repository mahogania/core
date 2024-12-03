import { CommunicationMedium as TCommunicationMedium } from "../api/communicationMedium/CommunicationMedium";

export const COMMUNICATIONMEDIUM_TITLE_FIELD = "catchAll";

export const CommunicationMediumTitle = (
  record: TCommunicationMedium
): string => {
  return record.catchAll?.toString() || String(record.id);
};
