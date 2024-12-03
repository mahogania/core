import { BisectNodesWhereInput } from "./BisectNodesWhereInput";
import { BisectNodesOrderByInput } from "./BisectNodesOrderByInput";

export type BisectNodesFindManyArgs = {
  where?: BisectNodesWhereInput;
  orderBy?: Array<BisectNodesOrderByInput>;
  skip?: number;
  take?: number;
};
