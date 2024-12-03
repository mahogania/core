export type PaymentGatewayAccount = {
  createdAt: Date;
  creation: Date | null;
  currency: string | null;
  docstatus: number | null;
  id: string;
  idx: number | null;
  isDefault: number | null;
  message: string | null;
  modified: Date | null;
  modifiedBy: string | null;
  name: string | null;
  owner: string | null;
  paymentAccount: string | null;
  paymentChannel: string | null;
  paymentGateway: string | null;
  updatedAt: Date;
};
