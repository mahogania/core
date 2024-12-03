import { PaymentEntryWhereInput } from "./PaymentEntryWhereInput";
import { PaymentEntryOrderByInput } from "./PaymentEntryOrderByInput";

export type PaymentEntryFindManyArgs = {
  where?: PaymentEntryWhereInput;
  orderBy?: Array<PaymentEntryOrderByInput>;
  skip?: number;
  take?: number;
};
