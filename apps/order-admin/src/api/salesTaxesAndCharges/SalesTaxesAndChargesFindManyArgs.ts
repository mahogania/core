import { SalesTaxesAndChargesWhereInput } from "./SalesTaxesAndChargesWhereInput";
import { SalesTaxesAndChargesOrderByInput } from "./SalesTaxesAndChargesOrderByInput";

export type SalesTaxesAndChargesFindManyArgs = {
  where?: SalesTaxesAndChargesWhereInput;
  orderBy?: Array<SalesTaxesAndChargesOrderByInput>;
  skip?: number;
  take?: number;
};
