export type PaymentGatewayAccountUpdateInput = {
  creation?: Date | null;
  currency?: string | null;
  docstatus?: number | null;
  idx?: number | null;
  isDefault?: number | null;
  message?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  owner?: string | null;
  paymentAccount?: string | null;
  paymentChannel?: string | null;
  paymentGateway?: string | null;
};
