import { BomOperationWhereInput } from "./BomOperationWhereInput";
import { BomOperationOrderByInput } from "./BomOperationOrderByInput";

export type BomOperationFindManyArgs = {
  where?: BomOperationWhereInput;
  orderBy?: Array<BomOperationOrderByInput>;
  skip?: number;
  take?: number;
};
