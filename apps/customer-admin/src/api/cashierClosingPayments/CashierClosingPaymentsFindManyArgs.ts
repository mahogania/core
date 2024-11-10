import { CashierClosingPaymentsWhereInput } from "./CashierClosingPaymentsWhereInput";
import { CashierClosingPaymentsOrderByInput } from "./CashierClosingPaymentsOrderByInput";

export type CashierClosingPaymentsFindManyArgs = {
  where?: CashierClosingPaymentsWhereInput;
  orderBy?: Array<CashierClosingPaymentsOrderByInput>;
  skip?: number;
  take?: number;
};
