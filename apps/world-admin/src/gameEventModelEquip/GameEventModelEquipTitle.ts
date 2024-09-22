import { GameEventModelEquip as TGameEventModelEquip } from "../api/gameEventModelEquip/GameEventModelEquip";

export const GAMEEVENTMODELEQUIP_TITLE_FIELD = "id";

export const GameEventModelEquipTitle = (
  record: TGameEventModelEquip
): string => {
  return record.id?.toString() || String(record.id);
};
