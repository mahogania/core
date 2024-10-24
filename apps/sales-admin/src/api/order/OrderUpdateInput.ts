import { ContractUpdateManyWithoutOrdersInput } from "./ContractUpdateManyWithoutOrdersInput";
import { InvoiceUpdateManyWithoutOrdersInput } from "./InvoiceUpdateManyWithoutOrdersInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";

export type OrderUpdateInput = {
  contracts?: ContractUpdateManyWithoutOrdersInput;
  invoices?: InvoiceUpdateManyWithoutOrdersInput;
  opportunity?: OpportunityWhereUniqueInput | null;
};
