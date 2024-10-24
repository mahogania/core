import { Configuration as TConfiguration } from "../api/configuration/Configuration";

export const CONFIGURATION_TITLE_FIELD = "id";

export const ConfigurationTitle = (record: TConfiguration): string => {
  return record.id?.toString() || String(record.id);
};
