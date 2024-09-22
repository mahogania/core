import { CreatureEquipTemplate as TCreatureEquipTemplate } from "../api/creatureEquipTemplate/CreatureEquipTemplate";

export const CREATUREEQUIPTEMPLATE_TITLE_FIELD = "id";

export const CreatureEquipTemplateTitle = (
  record: TCreatureEquipTemplate
): string => {
  return record.id?.toString() || String(record.id);
};
