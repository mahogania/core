import { PlayerRewardItemWhereInput } from "./PlayerRewardItemWhereInput";
import { PlayerRewardItemOrderByInput } from "./PlayerRewardItemOrderByInput";

export type PlayerRewardItemFindManyArgs = {
  where?: PlayerRewardItemWhereInput;
  orderBy?: Array<PlayerRewardItemOrderByInput>;
  skip?: number;
  take?: number;
};
