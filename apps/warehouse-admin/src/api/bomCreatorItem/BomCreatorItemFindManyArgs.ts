import { BomCreatorItemWhereInput } from "./BomCreatorItemWhereInput";
import { BomCreatorItemOrderByInput } from "./BomCreatorItemOrderByInput";

export type BomCreatorItemFindManyArgs = {
  where?: BomCreatorItemWhereInput;
  orderBy?: Array<BomCreatorItemOrderByInput>;
  skip?: number;
  take?: number;
};
