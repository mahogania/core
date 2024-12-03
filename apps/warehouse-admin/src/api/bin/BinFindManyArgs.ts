import { BinWhereInput } from "./BinWhereInput";
import { BinOrderByInput } from "./BinOrderByInput";

export type BinFindManyArgs = {
  where?: BinWhereInput;
  orderBy?: Array<BinOrderByInput>;
  skip?: number;
  take?: number;
};
