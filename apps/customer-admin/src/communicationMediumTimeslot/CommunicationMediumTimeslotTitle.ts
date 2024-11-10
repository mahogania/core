import { CommunicationMediumTimeslot as TCommunicationMediumTimeslot } from "../api/communicationMediumTimeslot/CommunicationMediumTimeslot";

export const COMMUNICATIONMEDIUMTIMESLOT_TITLE_FIELD = "dayOfWeek";

export const CommunicationMediumTimeslotTitle = (
  record: TCommunicationMediumTimeslot
): string => {
  return record.dayOfWeek?.toString() || String(record.id);
};
