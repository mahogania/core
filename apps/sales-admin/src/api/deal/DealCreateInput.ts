import { ContractCreateNestedManyWithoutDealsInput } from "./ContractCreateNestedManyWithoutDealsInput";
import { InvoiceCreateNestedManyWithoutDealsInput } from "./InvoiceCreateNestedManyWithoutDealsInput";
import { OrderCreateNestedManyWithoutDealsInput } from "./OrderCreateNestedManyWithoutDealsInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type DealCreateInput = {
  contracts?: ContractCreateNestedManyWithoutDealsInput;
  invoices?: InvoiceCreateNestedManyWithoutDealsInput;
  orders?: OrderCreateNestedManyWithoutDealsInput;
  unit?: UnitWhereUniqueInput | null;
};
