import { ConsoleLog as TConsoleLog } from "../api/consoleLog/ConsoleLog";

export const CONSOLELOG_TITLE_FIELD = "name";

export const ConsoleLogTitle = (record: TConsoleLog): string => {
  return record.name?.toString() || String(record.id);
};
