import { PackedItemWhereInput } from "./PackedItemWhereInput";
import { PackedItemOrderByInput } from "./PackedItemOrderByInput";

export type PackedItemFindManyArgs = {
  where?: PackedItemWhereInput;
  orderBy?: Array<PackedItemOrderByInput>;
  skip?: number;
  take?: number;
};
