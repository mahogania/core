import { PlayerchoiceResponseRewardCurrency as TPlayerchoiceResponseRewardCurrency } from "../api/playerchoiceResponseRewardCurrency/PlayerchoiceResponseRewardCurrency";

export const PLAYERCHOICERESPONSEREWARDCURRENCY_TITLE_FIELD = "id";

export const PlayerchoiceResponseRewardCurrencyTitle = (
  record: TPlayerchoiceResponseRewardCurrency
): string => {
  return record.id?.toString() || String(record.id);
};
