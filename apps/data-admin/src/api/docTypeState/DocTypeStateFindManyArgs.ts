import { DocTypeStateWhereInput } from "./DocTypeStateWhereInput";
import { DocTypeStateOrderByInput } from "./DocTypeStateOrderByInput";

export type DocTypeStateFindManyArgs = {
  where?: DocTypeStateWhereInput;
  orderBy?: Array<DocTypeStateOrderByInput>;
  skip?: number;
  take?: number;
};
