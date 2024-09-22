import { GameEventNpcVendorWhereInput } from "./GameEventNpcVendorWhereInput";
import { GameEventNpcVendorOrderByInput } from "./GameEventNpcVendorOrderByInput";

export type GameEventNpcVendorFindManyArgs = {
  where?: GameEventNpcVendorWhereInput;
  orderBy?: Array<GameEventNpcVendorOrderByInput>;
  skip?: number;
  take?: number;
};
