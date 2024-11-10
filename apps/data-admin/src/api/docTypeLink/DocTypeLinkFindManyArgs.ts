import { DocTypeLinkWhereInput } from "./DocTypeLinkWhereInput";
import { DocTypeLinkOrderByInput } from "./DocTypeLinkOrderByInput";

export type DocTypeLinkFindManyArgs = {
  where?: DocTypeLinkWhereInput;
  orderBy?: Array<DocTypeLinkOrderByInput>;
  skip?: number;
  take?: number;
};
