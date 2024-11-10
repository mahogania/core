import { SortOrder } from "../../util/SortOrder";

export type CouponCodeOrderByInput = {
  amendedFrom?: SortOrder;
  couponCode?: SortOrder;
  couponName?: SortOrder;
  couponType?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  customer?: SortOrder;
  description?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  maximumUse?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  pricingRule?: SortOrder;
  updatedAt?: SortOrder;
  used?: SortOrder;
  validFrom?: SortOrder;
  validUpto?: SortOrder;
};
