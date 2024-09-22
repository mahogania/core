import { CreatureSummonedData as TCreatureSummonedData } from "../api/creatureSummonedData/CreatureSummonedData";

export const CREATURESUMMONEDDATA_TITLE_FIELD = "id";

export const CreatureSummonedDataTitle = (
  record: TCreatureSummonedData
): string => {
  return record.id?.toString() || String(record.id);
};
