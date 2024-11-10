import { PlayerFactionReputationWhereInput } from "./PlayerFactionReputationWhereInput";
import { PlayerFactionReputationOrderByInput } from "./PlayerFactionReputationOrderByInput";

export type PlayerFactionReputationFindManyArgs = {
  where?: PlayerFactionReputationWhereInput;
  orderBy?: Array<PlayerFactionReputationOrderByInput>;
  skip?: number;
  take?: number;
};
