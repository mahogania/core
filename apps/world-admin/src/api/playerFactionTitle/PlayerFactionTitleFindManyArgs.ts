import { PlayerFactionTitleWhereInput } from "./PlayerFactionTitleWhereInput";
import { PlayerFactionTitleOrderByInput } from "./PlayerFactionTitleOrderByInput";

export type PlayerFactionTitleFindManyArgs = {
  where?: PlayerFactionTitleWhereInput;
  orderBy?: Array<PlayerFactionTitleOrderByInput>;
  skip?: number;
  take?: number;
};
