import { DocShareWhereInput } from "./DocShareWhereInput";
import { DocShareOrderByInput } from "./DocShareOrderByInput";

export type DocShareFindManyArgs = {
  where?: DocShareWhereInput;
  orderBy?: Array<DocShareOrderByInput>;
  skip?: number;
  take?: number;
};
