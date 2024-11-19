import { IndustryTypeWhereInput } from "./IndustryTypeWhereInput";
import { IndustryTypeOrderByInput } from "./IndustryTypeOrderByInput";

export type IndustryTypeFindManyArgs = {
  where?: IndustryTypeWhereInput;
  orderBy?: Array<IndustryTypeOrderByInput>;
  skip?: number;
  take?: number;
};
