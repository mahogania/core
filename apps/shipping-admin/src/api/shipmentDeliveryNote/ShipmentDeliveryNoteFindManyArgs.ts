import { ShipmentDeliveryNoteWhereInput } from "./ShipmentDeliveryNoteWhereInput";
import { ShipmentDeliveryNoteOrderByInput } from "./ShipmentDeliveryNoteOrderByInput";

export type ShipmentDeliveryNoteFindManyArgs = {
  where?: ShipmentDeliveryNoteWhereInput;
  orderBy?: Array<ShipmentDeliveryNoteOrderByInput>;
  skip?: number;
  take?: number;
};
