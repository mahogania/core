import { GossipMenuOptionWhereInput } from "./GossipMenuOptionWhereInput";
import { GossipMenuOptionOrderByInput } from "./GossipMenuOptionOrderByInput";

export type GossipMenuOptionFindManyArgs = {
  where?: GossipMenuOptionWhereInput;
  orderBy?: Array<GossipMenuOptionOrderByInput>;
  skip?: number;
  take?: number;
};
