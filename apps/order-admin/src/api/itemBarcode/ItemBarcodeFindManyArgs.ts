import { ItemBarcodeWhereInput } from "./ItemBarcodeWhereInput";
import { ItemBarcodeOrderByInput } from "./ItemBarcodeOrderByInput";

export type ItemBarcodeFindManyArgs = {
  where?: ItemBarcodeWhereInput;
  orderBy?: Array<ItemBarcodeOrderByInput>;
  skip?: number;
  take?: number;
};
