import { Process as TProcess } from "../api/process/Process";

export const PROCESS_TITLE_FIELD = "id";

export const ProcessTitle = (record: TProcess): string => {
  return record.id?.toString() || String(record.id);
};
