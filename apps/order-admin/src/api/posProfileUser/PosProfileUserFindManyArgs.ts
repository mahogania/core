import { PosProfileUserWhereInput } from "./PosProfileUserWhereInput";
import { PosProfileUserOrderByInput } from "./PosProfileUserOrderByInput";

export type PosProfileUserFindManyArgs = {
  where?: PosProfileUserWhereInput;
  orderBy?: Array<PosProfileUserOrderByInput>;
  skip?: number;
  take?: number;
};
