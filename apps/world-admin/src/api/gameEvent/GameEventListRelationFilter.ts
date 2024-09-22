import { GameEventWhereInput } from "./GameEventWhereInput";

export type GameEventListRelationFilter = {
  every?: GameEventWhereInput;
  some?: GameEventWhereInput;
  none?: GameEventWhereInput;
};
