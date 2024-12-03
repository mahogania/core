import { MapWhereInput } from "./MapWhereInput";
import { MapOrderByInput } from "./MapOrderByInput";

export type MapFindManyArgs = {
  where?: MapWhereInput;
  orderBy?: Array<MapOrderByInput>;
  skip?: number;
  take?: number;
};
