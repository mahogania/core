import { WorldWhereUniqueInput } from "./WorldWhereUniqueInput";
import { WorldUpdateInput } from "./WorldUpdateInput";

export type UpdateWorldArgs = {
  where: WorldWhereUniqueInput;
  data: WorldUpdateInput;
};
