import { ContractCreateNestedManyWithoutOrdersInput } from "./ContractCreateNestedManyWithoutOrdersInput";
import { InvoiceCreateNestedManyWithoutOrdersInput } from "./InvoiceCreateNestedManyWithoutOrdersInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";

export type OrderCreateInput = {
  contracts?: ContractCreateNestedManyWithoutOrdersInput;
  invoices?: InvoiceCreateNestedManyWithoutOrdersInput;
  opportunity?: OpportunityWhereUniqueInput | null;
};
