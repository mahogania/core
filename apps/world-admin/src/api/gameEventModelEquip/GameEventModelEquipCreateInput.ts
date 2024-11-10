import { GameEventCreateNestedManyWithoutGameEventModelEquipsInput } from "./GameEventCreateNestedManyWithoutGameEventModelEquipsInput";

export type GameEventModelEquipCreateInput = {
  equipmentId: string;
  gameEvents?: GameEventCreateNestedManyWithoutGameEventModelEquipsInput;
  modelid: string;
};
