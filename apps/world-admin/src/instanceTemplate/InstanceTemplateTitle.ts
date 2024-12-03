import { InstanceTemplate as TInstanceTemplate } from "../api/instanceTemplate/InstanceTemplate";

export const INSTANCETEMPLATE_TITLE_FIELD = "id";

export const InstanceTemplateTitle = (record: TInstanceTemplate): string => {
  return record.id?.toString() || String(record.id);
};
