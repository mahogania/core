import { GameObjectWhereUniqueInput } from "./GameObjectWhereUniqueInput";
import { GameObjectUpdateInput } from "./GameObjectUpdateInput";

export type UpdateGameObjectArgs = {
  where: GameObjectWhereUniqueInput;
  data: GameObjectUpdateInput;
};
