import { PaymentOrderReferenceWhereInput } from "./PaymentOrderReferenceWhereInput";
import { PaymentOrderReferenceOrderByInput } from "./PaymentOrderReferenceOrderByInput";

export type PaymentOrderReferenceFindManyArgs = {
  where?: PaymentOrderReferenceWhereInput;
  orderBy?: Array<PaymentOrderReferenceOrderByInput>;
  skip?: number;
  take?: number;
};
