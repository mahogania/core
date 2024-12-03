import { CreatureFormationWhereInput } from "./CreatureFormationWhereInput";
import { CreatureFormationOrderByInput } from "./CreatureFormationOrderByInput";

export type CreatureFormationFindManyArgs = {
  where?: CreatureFormationWhereInput;
  orderBy?: Array<CreatureFormationOrderByInput>;
  skip?: number;
  take?: number;
};
