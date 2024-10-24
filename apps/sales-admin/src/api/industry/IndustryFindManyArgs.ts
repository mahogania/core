import { IndustryWhereInput } from "./IndustryWhereInput";
import { IndustryOrderByInput } from "./IndustryOrderByInput";

export type IndustryFindManyArgs = {
  where?: IndustryWhereInput;
  orderBy?: Array<IndustryOrderByInput>;
  skip?: number;
  take?: number;
};
