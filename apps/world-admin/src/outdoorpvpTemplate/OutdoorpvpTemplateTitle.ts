import { OutdoorpvpTemplate as TOutdoorpvpTemplate } from "../api/outdoorpvpTemplate/OutdoorpvpTemplate";

export const OUTDOORPVPTEMPLATE_TITLE_FIELD = "id";

export const OutdoorpvpTemplateTitle = (
  record: TOutdoorpvpTemplate
): string => {
  return record.id?.toString() || String(record.id);
};
