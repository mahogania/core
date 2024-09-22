import { CreatureModelInfoWhereInput } from "./CreatureModelInfoWhereInput";
import { CreatureModelInfoOrderByInput } from "./CreatureModelInfoOrderByInput";

export type CreatureModelInfoFindManyArgs = {
  where?: CreatureModelInfoWhereInput;
  orderBy?: Array<CreatureModelInfoOrderByInput>;
  skip?: number;
  take?: number;
};
