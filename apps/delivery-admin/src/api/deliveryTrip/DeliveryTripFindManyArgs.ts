import { DeliveryTripWhereInput } from "./DeliveryTripWhereInput";
import { DeliveryTripOrderByInput } from "./DeliveryTripOrderByInput";

export type DeliveryTripFindManyArgs = {
  where?: DeliveryTripWhereInput;
  orderBy?: Array<DeliveryTripOrderByInput>;
  skip?: number;
  take?: number;
};
