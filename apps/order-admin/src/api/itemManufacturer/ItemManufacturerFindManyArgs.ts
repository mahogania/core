import { ItemManufacturerWhereInput } from "./ItemManufacturerWhereInput";
import { ItemManufacturerOrderByInput } from "./ItemManufacturerOrderByInput";

export type ItemManufacturerFindManyArgs = {
  where?: ItemManufacturerWhereInput;
  orderBy?: Array<ItemManufacturerOrderByInput>;
  skip?: number;
  take?: number;
};
