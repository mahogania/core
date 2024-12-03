import { GameObjectWhereInput } from "./GameObjectWhereInput";

export type GameObjectListRelationFilter = {
  every?: GameObjectWhereInput;
  some?: GameObjectWhereInput;
  none?: GameObjectWhereInput;
};
