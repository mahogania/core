import { UnreconcilePaymentEntriesWhereInput } from "./UnreconcilePaymentEntriesWhereInput";
import { UnreconcilePaymentEntriesOrderByInput } from "./UnreconcilePaymentEntriesOrderByInput";

export type UnreconcilePaymentEntriesFindManyArgs = {
  where?: UnreconcilePaymentEntriesWhereInput;
  orderBy?: Array<UnreconcilePaymentEntriesOrderByInput>;
  skip?: number;
  take?: number;
};
