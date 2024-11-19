import { ClientScript as TClientScript } from "../api/clientScript/ClientScript";

export const CLIENTSCRIPT_TITLE_FIELD = "dt";

export const ClientScriptTitle = (record: TClientScript): string => {
  return record.dt?.toString() || String(record.id);
};
