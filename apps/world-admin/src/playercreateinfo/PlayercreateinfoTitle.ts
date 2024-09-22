import { Playercreateinfo as TPlayercreateinfo } from "../api/playercreateinfo/Playercreateinfo";

export const PLAYERCREATEINFO_TITLE_FIELD = "id";

export const PlayercreateinfoTitle = (record: TPlayercreateinfo): string => {
  return record.id?.toString() || String(record.id);
};
