import { GameEventModelEquipWhereInput } from "./GameEventModelEquipWhereInput";
import { GameEventModelEquipOrderByInput } from "./GameEventModelEquipOrderByInput";

export type GameEventModelEquipFindManyArgs = {
  where?: GameEventModelEquipWhereInput;
  orderBy?: Array<GameEventModelEquipOrderByInput>;
  skip?: number;
  take?: number;
};
