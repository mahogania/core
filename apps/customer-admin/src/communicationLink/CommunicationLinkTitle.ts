import { CommunicationLink as TCommunicationLink } from "../api/communicationLink/CommunicationLink";

export const COMMUNICATIONLINK_TITLE_FIELD = "linkName";

export const CommunicationLinkTitle = (record: TCommunicationLink): string => {
  return record.linkName?.toString() || String(record.id);
};
