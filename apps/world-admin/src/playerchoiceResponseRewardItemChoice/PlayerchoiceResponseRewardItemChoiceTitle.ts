import { PlayerchoiceResponseRewardItemChoice as TPlayerchoiceResponseRewardItemChoice } from "../api/playerchoiceResponseRewardItemChoice/PlayerchoiceResponseRewardItemChoice";

export const PLAYERCHOICERESPONSEREWARDITEMCHOICE_TITLE_FIELD = "id";

export const PlayerchoiceResponseRewardItemChoiceTitle = (
  record: TPlayerchoiceResponseRewardItemChoice
): string => {
  return record.id?.toString() || String(record.id);
};
