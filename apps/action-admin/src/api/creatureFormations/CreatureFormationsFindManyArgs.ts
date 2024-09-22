import { CreatureFormationsWhereInput } from "./CreatureFormationsWhereInput";
import { CreatureFormationsOrderByInput } from "./CreatureFormationsOrderByInput";

export type CreatureFormationsFindManyArgs = {
  where?: CreatureFormationsWhereInput;
  orderBy?: Array<CreatureFormationsOrderByInput>;
  skip?: number;
  take?: number;
};
