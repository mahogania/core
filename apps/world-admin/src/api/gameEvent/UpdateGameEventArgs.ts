import { GameEventWhereUniqueInput } from "./GameEventWhereUniqueInput";
import { GameEventUpdateInput } from "./GameEventUpdateInput";

export type UpdateGameEventArgs = {
  where: GameEventWhereUniqueInput;
  data: GameEventUpdateInput;
};
