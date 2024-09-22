import { PoolTemplateWhereInput } from "./PoolTemplateWhereInput";
import { PoolTemplateOrderByInput } from "./PoolTemplateOrderByInput";

export type PoolTemplateFindManyArgs = {
  where?: PoolTemplateWhereInput;
  orderBy?: Array<PoolTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
