import { BomItemWhereInput } from "./BomItemWhereInput";
import { BomItemOrderByInput } from "./BomItemOrderByInput";

export type BomItemFindManyArgs = {
  where?: BomItemWhereInput;
  orderBy?: Array<BomItemOrderByInput>;
  skip?: number;
  take?: number;
};
