import { GraveyardZoneWhereInput } from "./GraveyardZoneWhereInput";
import { GraveyardZoneOrderByInput } from "./GraveyardZoneOrderByInput";

export type GraveyardZoneFindManyArgs = {
  where?: GraveyardZoneWhereInput;
  orderBy?: Array<GraveyardZoneOrderByInput>;
  skip?: number;
  take?: number;
};
