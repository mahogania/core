import { PosFieldWhereInput } from "./PosFieldWhereInput";
import { PosFieldOrderByInput } from "./PosFieldOrderByInput";

export type PosFieldFindManyArgs = {
  where?: PosFieldWhereInput;
  orderBy?: Array<PosFieldOrderByInput>;
  skip?: number;
  take?: number;
};
