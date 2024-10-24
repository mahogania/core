import { ContractListRelationFilter } from "../contract/ContractListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";

export type OrderWhereInput = {
  contracts?: ContractListRelationFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  opportunity?: OpportunityWhereUniqueInput;
};
