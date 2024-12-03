import { WorldWhereInput } from "./WorldWhereInput";
import { WorldOrderByInput } from "./WorldOrderByInput";

export type WorldFindManyArgs = {
  where?: WorldWhereInput;
  orderBy?: Array<WorldOrderByInput>;
  skip?: number;
  take?: number;
};
