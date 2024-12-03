import { PackingSlipWhereInput } from "./PackingSlipWhereInput";
import { PackingSlipOrderByInput } from "./PackingSlipOrderByInput";

export type PackingSlipFindManyArgs = {
  where?: PackingSlipWhereInput;
  orderBy?: Array<PackingSlipOrderByInput>;
  skip?: number;
  take?: number;
};
