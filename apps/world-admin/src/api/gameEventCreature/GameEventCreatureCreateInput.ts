import { GameEventCreateNestedManyWithoutGameEventCreaturesInput } from "./GameEventCreateNestedManyWithoutGameEventCreaturesInput";

export type GameEventCreatureCreateInput = {
  gameEvents?: GameEventCreateNestedManyWithoutGameEventCreaturesInput;
  spawnerId: string;
};
