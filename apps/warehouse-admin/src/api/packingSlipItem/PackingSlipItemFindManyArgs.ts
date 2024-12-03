import { PackingSlipItemWhereInput } from "./PackingSlipItemWhereInput";
import { PackingSlipItemOrderByInput } from "./PackingSlipItemOrderByInput";

export type PackingSlipItemFindManyArgs = {
  where?: PackingSlipItemWhereInput;
  orderBy?: Array<PackingSlipItemOrderByInput>;
  skip?: number;
  take?: number;
};
