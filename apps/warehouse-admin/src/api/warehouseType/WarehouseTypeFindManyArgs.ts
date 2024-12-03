import { WarehouseTypeWhereInput } from "./WarehouseTypeWhereInput";
import { WarehouseTypeOrderByInput } from "./WarehouseTypeOrderByInput";

export type WarehouseTypeFindManyArgs = {
  where?: WarehouseTypeWhereInput;
  orderBy?: Array<WarehouseTypeOrderByInput>;
  skip?: number;
  take?: number;
};
