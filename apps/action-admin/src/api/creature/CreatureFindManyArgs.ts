import { CreatureWhereInput } from "./CreatureWhereInput";
import { CreatureOrderByInput } from "./CreatureOrderByInput";

export type CreatureFindManyArgs = {
  where?: CreatureWhereInput;
  orderBy?: Array<CreatureOrderByInput>;
  skip?: number;
  take?: number;
};
