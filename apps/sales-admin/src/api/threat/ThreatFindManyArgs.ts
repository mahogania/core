import { ThreatWhereInput } from "./ThreatWhereInput";
import { ThreatOrderByInput } from "./ThreatOrderByInput";

export type ThreatFindManyArgs = {
  where?: ThreatWhereInput;
  orderBy?: Array<ThreatOrderByInput>;
  skip?: number;
  take?: number;
};
