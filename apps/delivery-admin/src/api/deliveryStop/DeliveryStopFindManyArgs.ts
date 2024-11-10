import { DeliveryStopWhereInput } from "./DeliveryStopWhereInput";
import { DeliveryStopOrderByInput } from "./DeliveryStopOrderByInput";

export type DeliveryStopFindManyArgs = {
  where?: DeliveryStopWhereInput;
  orderBy?: Array<DeliveryStopOrderByInput>;
  skip?: number;
  take?: number;
};
