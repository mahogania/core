import { EpicWhereUniqueInput } from "./EpicWhereUniqueInput";
import { EpicUpdateInput } from "./EpicUpdateInput";

export type UpdateEpicArgs = {
  where: EpicWhereUniqueInput;
  data: EpicUpdateInput;
};
