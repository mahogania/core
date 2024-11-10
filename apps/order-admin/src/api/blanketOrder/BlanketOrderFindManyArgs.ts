import { BlanketOrderWhereInput } from "./BlanketOrderWhereInput";
import { BlanketOrderOrderByInput } from "./BlanketOrderOrderByInput";

export type BlanketOrderFindManyArgs = {
  where?: BlanketOrderWhereInput;
  orderBy?: Array<BlanketOrderOrderByInput>;
  skip?: number;
  take?: number;
};
