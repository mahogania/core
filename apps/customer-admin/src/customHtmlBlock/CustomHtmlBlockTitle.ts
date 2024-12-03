import { CustomHtmlBlock as TCustomHtmlBlock } from "../api/customHtmlBlock/CustomHtmlBlock";

export const CUSTOMHTMLBLOCK_TITLE_FIELD = "name";

export const CustomHtmlBlockTitle = (record: TCustomHtmlBlock): string => {
  return record.name?.toString() || String(record.id);
};
