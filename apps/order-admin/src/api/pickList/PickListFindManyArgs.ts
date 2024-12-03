import { PickListWhereInput } from "./PickListWhereInput";
import { PickListOrderByInput } from "./PickListOrderByInput";

export type PickListFindManyArgs = {
  where?: PickListWhereInput;
  orderBy?: Array<PickListOrderByInput>;
  skip?: number;
  take?: number;
};
