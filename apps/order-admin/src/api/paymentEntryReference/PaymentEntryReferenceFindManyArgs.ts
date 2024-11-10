import { PaymentEntryReferenceWhereInput } from "./PaymentEntryReferenceWhereInput";
import { PaymentEntryReferenceOrderByInput } from "./PaymentEntryReferenceOrderByInput";

export type PaymentEntryReferenceFindManyArgs = {
  where?: PaymentEntryReferenceWhereInput;
  orderBy?: Array<PaymentEntryReferenceOrderByInput>;
  skip?: number;
  take?: number;
};
