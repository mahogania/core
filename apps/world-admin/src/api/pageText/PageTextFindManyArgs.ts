import { PageTextWhereInput } from "./PageTextWhereInput";
import { PageTextOrderByInput } from "./PageTextOrderByInput";

export type PageTextFindManyArgs = {
  where?: PageTextWhereInput;
  orderBy?: Array<PageTextOrderByInput>;
  skip?: number;
  take?: number;
};
