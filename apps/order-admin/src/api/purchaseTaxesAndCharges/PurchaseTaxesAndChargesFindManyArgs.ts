import { PurchaseTaxesAndChargesWhereInput } from "./PurchaseTaxesAndChargesWhereInput";
import { PurchaseTaxesAndChargesOrderByInput } from "./PurchaseTaxesAndChargesOrderByInput";

export type PurchaseTaxesAndChargesFindManyArgs = {
  where?: PurchaseTaxesAndChargesWhereInput;
  orderBy?: Array<PurchaseTaxesAndChargesOrderByInput>;
  skip?: number;
  take?: number;
};
