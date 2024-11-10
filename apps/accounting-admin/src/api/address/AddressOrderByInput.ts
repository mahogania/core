import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  addressLine1?: SortOrder;
  addressLine2?: SortOrder;
  addressTitle?: SortOrder;
  addressType?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  county?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  disabled?: SortOrder;
  docstatus?: SortOrder;
  emailId?: SortOrder;
  fax?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  isPrimaryAddress?: SortOrder;
  isShippingAddress?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  phone?: SortOrder;
  pincode?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
};
