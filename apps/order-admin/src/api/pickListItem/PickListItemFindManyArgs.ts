import { PickListItemWhereInput } from "./PickListItemWhereInput";
import { PickListItemOrderByInput } from "./PickListItemOrderByInput";

export type PickListItemFindManyArgs = {
  where?: PickListItemWhereInput;
  orderBy?: Array<PickListItemOrderByInput>;
  skip?: number;
  take?: number;
};
