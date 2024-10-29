import { GameEventModelEquip as TGameEventModelEquip } from "../api/gameEventModelEquip/GameEventModelEquip";

export const GAMEEVENTMODELEQUIP_TITLE_FIELD = "equipmentId";

export const GameEventModelEquipTitle = (
  record: TGameEventModelEquip
): string => {
  return record.equipmentId?.toString() || String(record.id);
};
