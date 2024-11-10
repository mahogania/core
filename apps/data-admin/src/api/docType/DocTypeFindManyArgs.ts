import { DocTypeWhereInput } from "./DocTypeWhereInput";
import { DocTypeOrderByInput } from "./DocTypeOrderByInput";

export type DocTypeFindManyArgs = {
  where?: DocTypeWhereInput;
  orderBy?: Array<DocTypeOrderByInput>;
  skip?: number;
  take?: number;
};
