import { PosPaymentMethodWhereInput } from "./PosPaymentMethodWhereInput";
import { PosPaymentMethodOrderByInput } from "./PosPaymentMethodOrderByInput";

export type PosPaymentMethodFindManyArgs = {
  where?: PosPaymentMethodWhereInput;
  orderBy?: Array<PosPaymentMethodOrderByInput>;
  skip?: number;
  take?: number;
};
