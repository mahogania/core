import { GeneStat as TGeneStat } from "../api/geneStat/GeneStat";

export const GENESTAT_TITLE_FIELD = "id";

export const GeneStatTitle = (record: TGeneStat): string => {
  return record.id?.toString() || String(record.id);
};
