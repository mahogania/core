import { ZoneWhereInput } from "./ZoneWhereInput";
import { ZoneOrderByInput } from "./ZoneOrderByInput";

export type ZoneFindManyArgs = {
  where?: ZoneWhereInput;
  orderBy?: Array<ZoneOrderByInput>;
  skip?: number;
  take?: number;
};
