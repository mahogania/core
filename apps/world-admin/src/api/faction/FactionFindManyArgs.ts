import { FactionWhereInput } from "./FactionWhereInput";
import { FactionOrderByInput } from "./FactionOrderByInput";

export type FactionFindManyArgs = {
  where?: FactionWhereInput;
  orderBy?: Array<FactionOrderByInput>;
  skip?: number;
  take?: number;
};
