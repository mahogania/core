import { SalesPartnerItemWhereInput } from "./SalesPartnerItemWhereInput";
import { SalesPartnerItemOrderByInput } from "./SalesPartnerItemOrderByInput";

export type SalesPartnerItemFindManyArgs = {
  where?: SalesPartnerItemWhereInput;
  orderBy?: Array<SalesPartnerItemOrderByInput>;
  skip?: number;
  take?: number;
};
