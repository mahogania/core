import { CreatureEquipment as TCreatureEquipment } from "../api/creatureEquipment/CreatureEquipment";

export const CREATUREEQUIPMENT_TITLE_FIELD = "id";

export const CreatureEquipmentTitle = (record: TCreatureEquipment): string => {
  return record.id?.toString() || String(record.id);
};
