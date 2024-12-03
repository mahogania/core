import { SubscriptionInvoiceWhereInput } from "./SubscriptionInvoiceWhereInput";
import { SubscriptionInvoiceOrderByInput } from "./SubscriptionInvoiceOrderByInput";

export type SubscriptionInvoiceFindManyArgs = {
  where?: SubscriptionInvoiceWhereInput;
  orderBy?: Array<SubscriptionInvoiceOrderByInput>;
  skip?: number;
  take?: number;
};
