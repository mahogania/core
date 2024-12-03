import { PaymentReconciliationLogAllocationWhereInput } from "./PaymentReconciliationLogAllocationWhereInput";
import { PaymentReconciliationLogAllocationOrderByInput } from "./PaymentReconciliationLogAllocationOrderByInput";

export type PaymentReconciliationLogAllocationFindManyArgs = {
  where?: PaymentReconciliationLogAllocationWhereInput;
  orderBy?: Array<PaymentReconciliationLogAllocationOrderByInput>;
  skip?: number;
  take?: number;
};
