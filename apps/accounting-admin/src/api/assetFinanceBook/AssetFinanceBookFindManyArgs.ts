import { AssetFinanceBookWhereInput } from "./AssetFinanceBookWhereInput";
import { AssetFinanceBookOrderByInput } from "./AssetFinanceBookOrderByInput";

export type AssetFinanceBookFindManyArgs = {
  where?: AssetFinanceBookWhereInput;
  orderBy?: Array<AssetFinanceBookOrderByInput>;
  skip?: number;
  take?: number;
};
