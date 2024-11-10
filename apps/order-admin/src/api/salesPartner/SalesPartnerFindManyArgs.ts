import { SalesPartnerWhereInput } from "./SalesPartnerWhereInput";
import { SalesPartnerOrderByInput } from "./SalesPartnerOrderByInput";

export type SalesPartnerFindManyArgs = {
  where?: SalesPartnerWhereInput;
  orderBy?: Array<SalesPartnerOrderByInput>;
  skip?: number;
  take?: number;
};
