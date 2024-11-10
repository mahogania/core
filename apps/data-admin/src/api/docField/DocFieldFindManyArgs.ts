import { DocFieldWhereInput } from "./DocFieldWhereInput";
import { DocFieldOrderByInput } from "./DocFieldOrderByInput";

export type DocFieldFindManyArgs = {
  where?: DocFieldWhereInput;
  orderBy?: Array<DocFieldOrderByInput>;
  skip?: number;
  take?: number;
};
