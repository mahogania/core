import { CreatureTemplateDifficulty as TCreatureTemplateDifficulty } from "../api/creatureTemplateDifficulty/CreatureTemplateDifficulty";

export const CREATURETEMPLATEDIFFICULTY_TITLE_FIELD = "id";

export const CreatureTemplateDifficultyTitle = (
  record: TCreatureTemplateDifficulty
): string => {
  return record.id?.toString() || String(record.id);
};
