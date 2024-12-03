import { PaymentGatewayAccount as TPaymentGatewayAccount } from "../api/paymentGatewayAccount/PaymentGatewayAccount";

export const PAYMENTGATEWAYACCOUNT_TITLE_FIELD = "name";

export const PaymentGatewayAccountTitle = (
  record: TPaymentGatewayAccount
): string => {
  return record.name?.toString() || String(record.id);
};
