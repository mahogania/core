import { PlayerRewardWhereInput } from "./PlayerRewardWhereInput";
import { PlayerRewardOrderByInput } from "./PlayerRewardOrderByInput";

export type PlayerRewardFindManyArgs = {
  where?: PlayerRewardWhereInput;
  orderBy?: Array<PlayerRewardOrderByInput>;
  skip?: number;
  take?: number;
};
