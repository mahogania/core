import { PaymentRequestWhereInput } from "./PaymentRequestWhereInput";
import { PaymentRequestOrderByInput } from "./PaymentRequestOrderByInput";

export type PaymentRequestFindManyArgs = {
  where?: PaymentRequestWhereInput;
  orderBy?: Array<PaymentRequestOrderByInput>;
  skip?: number;
  take?: number;
};
