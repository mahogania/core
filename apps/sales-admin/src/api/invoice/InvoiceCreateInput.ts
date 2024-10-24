import { DealWhereUniqueInput } from "../deal/DealWhereUniqueInput";

export type InvoiceCreateInput = {
  deal?: DealWhereUniqueInput | null;
};
