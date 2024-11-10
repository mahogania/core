import { ModeOfPaymentAccountWhereInput } from "./ModeOfPaymentAccountWhereInput";
import { ModeOfPaymentAccountOrderByInput } from "./ModeOfPaymentAccountOrderByInput";

export type ModeOfPaymentAccountFindManyArgs = {
  where?: ModeOfPaymentAccountWhereInput;
  orderBy?: Array<ModeOfPaymentAccountOrderByInput>;
  skip?: number;
  take?: number;
};
