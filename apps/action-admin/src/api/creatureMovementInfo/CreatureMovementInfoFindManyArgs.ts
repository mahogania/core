import { CreatureMovementInfoWhereInput } from "./CreatureMovementInfoWhereInput";
import { CreatureMovementInfoOrderByInput } from "./CreatureMovementInfoOrderByInput";

export type CreatureMovementInfoFindManyArgs = {
  where?: CreatureMovementInfoWhereInput;
  orderBy?: Array<CreatureMovementInfoOrderByInput>;
  skip?: number;
  take?: number;
};
