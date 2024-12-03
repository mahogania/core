import { CreatureTemplateMovement as TCreatureTemplateMovement } from "../api/creatureTemplateMovement/CreatureTemplateMovement";

export const CREATURETEMPLATEMOVEMENT_TITLE_FIELD = "id";

export const CreatureTemplateMovementTitle = (
  record: TCreatureTemplateMovement
): string => {
  return record.id?.toString() || String(record.id);
};
