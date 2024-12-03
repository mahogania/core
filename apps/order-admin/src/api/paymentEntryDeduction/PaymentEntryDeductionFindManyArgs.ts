import { PaymentEntryDeductionWhereInput } from "./PaymentEntryDeductionWhereInput";
import { PaymentEntryDeductionOrderByInput } from "./PaymentEntryDeductionOrderByInput";

export type PaymentEntryDeductionFindManyArgs = {
  where?: PaymentEntryDeductionWhereInput;
  orderBy?: Array<PaymentEntryDeductionOrderByInput>;
  skip?: number;
  take?: number;
};
