import { QuotationItemWhereInput } from "./QuotationItemWhereInput";
import { QuotationItemOrderByInput } from "./QuotationItemOrderByInput";

export type QuotationItemFindManyArgs = {
  where?: QuotationItemWhereInput;
  orderBy?: Array<QuotationItemOrderByInput>;
  skip?: number;
  take?: number;
};
