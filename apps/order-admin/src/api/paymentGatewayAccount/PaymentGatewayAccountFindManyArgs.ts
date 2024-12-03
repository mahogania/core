import { PaymentGatewayAccountWhereInput } from "./PaymentGatewayAccountWhereInput";
import { PaymentGatewayAccountOrderByInput } from "./PaymentGatewayAccountOrderByInput";

export type PaymentGatewayAccountFindManyArgs = {
  where?: PaymentGatewayAccountWhereInput;
  orderBy?: Array<PaymentGatewayAccountOrderByInput>;
  skip?: number;
  take?: number;
};
