import { CustomsTariffNumber as TCustomsTariffNumber } from "../api/customsTariffNumber/CustomsTariffNumber";

export const CUSTOMSTARIFFNUMBER_TITLE_FIELD = "name";

export const CustomsTariffNumberTitle = (
  record: TCustomsTariffNumber
): string => {
  return record.name?.toString() || String(record.id);
};
