import { ModeOfPaymentWhereInput } from "./ModeOfPaymentWhereInput";
import { ModeOfPaymentOrderByInput } from "./ModeOfPaymentOrderByInput";

export type ModeOfPaymentFindManyArgs = {
  where?: ModeOfPaymentWhereInput;
  orderBy?: Array<ModeOfPaymentOrderByInput>;
  skip?: number;
  take?: number;
};
