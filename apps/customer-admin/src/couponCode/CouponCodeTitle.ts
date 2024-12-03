import { CouponCode as TCouponCode } from "../api/couponCode/CouponCode";

export const COUPONCODE_TITLE_FIELD = "couponName";

export const CouponCodeTitle = (record: TCouponCode): string => {
  return record.couponName?.toString() || String(record.id);
};
