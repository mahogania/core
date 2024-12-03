import { PaymentLedgerEntryWhereInput } from "./PaymentLedgerEntryWhereInput";
import { PaymentLedgerEntryOrderByInput } from "./PaymentLedgerEntryOrderByInput";

export type PaymentLedgerEntryFindManyArgs = {
  where?: PaymentLedgerEntryWhereInput;
  orderBy?: Array<PaymentLedgerEntryOrderByInput>;
  skip?: number;
  take?: number;
};
