import { UnreconcilePaymentWhereInput } from "./UnreconcilePaymentWhereInput";
import { UnreconcilePaymentOrderByInput } from "./UnreconcilePaymentOrderByInput";

export type UnreconcilePaymentFindManyArgs = {
  where?: UnreconcilePaymentWhereInput;
  orderBy?: Array<UnreconcilePaymentOrderByInput>;
  skip?: number;
  take?: number;
};
