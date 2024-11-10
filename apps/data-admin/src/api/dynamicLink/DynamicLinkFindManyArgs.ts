import { DynamicLinkWhereInput } from "./DynamicLinkWhereInput";
import { DynamicLinkOrderByInput } from "./DynamicLinkOrderByInput";

export type DynamicLinkFindManyArgs = {
  where?: DynamicLinkWhereInput;
  orderBy?: Array<DynamicLinkOrderByInput>;
  skip?: number;
  take?: number;
};
