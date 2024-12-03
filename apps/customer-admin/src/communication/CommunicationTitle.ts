import { Communication as TCommunication } from "../api/communication/Communication";

export const COMMUNICATION_TITLE_FIELD = "referenceName";

export const CommunicationTitle = (record: TCommunication): string => {
  return record.referenceName?.toString() || String(record.id);
};
