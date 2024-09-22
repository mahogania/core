import { CreatureAddonWhereInput } from "./CreatureAddonWhereInput";
import { CreatureAddonOrderByInput } from "./CreatureAddonOrderByInput";

export type CreatureAddonFindManyArgs = {
  where?: CreatureAddonWhereInput;
  orderBy?: Array<CreatureAddonOrderByInput>;
  skip?: number;
  take?: number;
};
