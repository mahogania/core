import { BomExplosionItemWhereInput } from "./BomExplosionItemWhereInput";
import { BomExplosionItemOrderByInput } from "./BomExplosionItemOrderByInput";

export type BomExplosionItemFindManyArgs = {
  where?: BomExplosionItemWhereInput;
  orderBy?: Array<BomExplosionItemOrderByInput>;
  skip?: number;
  take?: number;
};
