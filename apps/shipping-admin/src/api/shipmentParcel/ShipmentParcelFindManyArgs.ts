import { ShipmentParcelWhereInput } from "./ShipmentParcelWhereInput";
import { ShipmentParcelOrderByInput } from "./ShipmentParcelOrderByInput";

export type ShipmentParcelFindManyArgs = {
  where?: ShipmentParcelWhereInput;
  orderBy?: Array<ShipmentParcelOrderByInput>;
  skip?: number;
  take?: number;
};
