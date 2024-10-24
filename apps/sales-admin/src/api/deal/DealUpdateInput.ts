import { ContractUpdateManyWithoutDealsInput } from "./ContractUpdateManyWithoutDealsInput";
import { InvoiceUpdateManyWithoutDealsInput } from "./InvoiceUpdateManyWithoutDealsInput";
import { OrderUpdateManyWithoutDealsInput } from "./OrderUpdateManyWithoutDealsInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type DealUpdateInput = {
  contracts?: ContractUpdateManyWithoutDealsInput;
  invoices?: InvoiceUpdateManyWithoutDealsInput;
  orders?: OrderUpdateManyWithoutDealsInput;
  unit?: UnitWhereUniqueInput | null;
};
