import { PaymentReconciliationLogWhereInput } from "./PaymentReconciliationLogWhereInput";
import { PaymentReconciliationLogOrderByInput } from "./PaymentReconciliationLogOrderByInput";

export type PaymentReconciliationLogFindManyArgs = {
  where?: PaymentReconciliationLogWhereInput;
  orderBy?: Array<PaymentReconciliationLogOrderByInput>;
  skip?: number;
  take?: number;
};
