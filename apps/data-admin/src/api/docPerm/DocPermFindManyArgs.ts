import { DocPermWhereInput } from "./DocPermWhereInput";
import { DocPermOrderByInput } from "./DocPermOrderByInput";

export type DocPermFindManyArgs = {
  where?: DocPermWhereInput;
  orderBy?: Array<DocPermOrderByInput>;
  skip?: number;
  take?: number;
};
