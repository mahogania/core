import { BomCreatorWhereInput } from "./BomCreatorWhereInput";
import { BomCreatorOrderByInput } from "./BomCreatorOrderByInput";

export type BomCreatorFindManyArgs = {
  where?: BomCreatorWhereInput;
  orderBy?: Array<BomCreatorOrderByInput>;
  skip?: number;
  take?: number;
};
