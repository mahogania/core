import { ConnectedApp as TConnectedApp } from "../api/connectedApp/ConnectedApp";

export const CONNECTEDAPP_TITLE_FIELD = "name";

export const ConnectedAppTitle = (record: TConnectedApp): string => {
  return record.name?.toString() || String(record.id);
};
