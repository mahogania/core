import { PosProfileWhereInput } from "./PosProfileWhereInput";
import { PosProfileOrderByInput } from "./PosProfileOrderByInput";

export type PosProfileFindManyArgs = {
  where?: PosProfileWhereInput;
  orderBy?: Array<PosProfileOrderByInput>;
  skip?: number;
  take?: number;
};
