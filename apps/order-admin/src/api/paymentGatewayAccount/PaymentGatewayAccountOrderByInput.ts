import { SortOrder } from "../../util/SortOrder";

export type PaymentGatewayAccountOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  currency?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  isDefault?: SortOrder;
  message?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  paymentAccount?: SortOrder;
  paymentChannel?: SortOrder;
  paymentGateway?: SortOrder;
  updatedAt?: SortOrder;
};
