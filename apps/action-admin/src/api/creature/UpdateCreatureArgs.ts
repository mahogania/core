import { CreatureWhereUniqueInput } from "./CreatureWhereUniqueInput";
import { CreatureUpdateInput } from "./CreatureUpdateInput";

export type UpdateCreatureArgs = {
  where: CreatureWhereUniqueInput;
  data: CreatureUpdateInput;
};
