import { PaymentReconciliationWhereInput } from "./PaymentReconciliationWhereInput";
import { PaymentReconciliationOrderByInput } from "./PaymentReconciliationOrderByInput";

export type PaymentReconciliationFindManyArgs = {
  where?: PaymentReconciliationWhereInput;
  orderBy?: Array<PaymentReconciliationOrderByInput>;
  skip?: number;
  take?: number;
};
