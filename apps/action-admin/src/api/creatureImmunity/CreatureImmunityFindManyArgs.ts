import { CreatureImmunityWhereInput } from "./CreatureImmunityWhereInput";
import { CreatureImmunityOrderByInput } from "./CreatureImmunityOrderByInput";

export type CreatureImmunityFindManyArgs = {
  where?: CreatureImmunityWhereInput;
  orderBy?: Array<CreatureImmunityOrderByInput>;
  skip?: number;
  take?: number;
};
