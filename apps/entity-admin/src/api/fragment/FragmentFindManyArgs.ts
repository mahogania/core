import { FragmentWhereInput } from "./FragmentWhereInput";
import { FragmentOrderByInput } from "./FragmentOrderByInput";

export type FragmentFindManyArgs = {
  where?: FragmentWhereInput;
  orderBy?: Array<FragmentOrderByInput>;
  skip?: number;
  take?: number;
};
