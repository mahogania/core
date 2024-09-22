import { PlayerFactionchangeReputationsWhereInput } from "./PlayerFactionchangeReputationsWhereInput";
import { PlayerFactionchangeReputationsOrderByInput } from "./PlayerFactionchangeReputationsOrderByInput";

export type PlayerFactionchangeReputationsFindManyArgs = {
  where?: PlayerFactionchangeReputationsWhereInput;
  orderBy?: Array<PlayerFactionchangeReputationsOrderByInput>;
  skip?: number;
  take?: number;
};
