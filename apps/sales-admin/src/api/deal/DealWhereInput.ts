import { ContractListRelationFilter } from "../contract/ContractListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type DealWhereInput = {
  contracts?: ContractListRelationFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  orders?: OrderListRelationFilter;
  unit?: UnitWhereUniqueInput;
};
