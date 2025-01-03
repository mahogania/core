export type CouponCode = {
  amendedFrom: string | null;
  couponCode: string | null;
  couponName: string | null;
  couponType: string | null;
  createdAt: Date;
  creation: Date | null;
  customer: string | null;
  description: string | null;
  docstatus: number | null;
  id: string;
  idx: number | null;
  maximumUse: number | null;
  modified: Date | null;
  modifiedBy: string | null;
  name: string | null;
  owner: string | null;
  pricingRule: string | null;
  updatedAt: Date;
  used: number | null;
  validFrom: Date | null;
  validUpto: Date | null;
};
