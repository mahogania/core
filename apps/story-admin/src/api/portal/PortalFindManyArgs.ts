import { PortalWhereInput } from "./PortalWhereInput";
import { PortalOrderByInput } from "./PortalOrderByInput";

export type PortalFindManyArgs = {
  where?: PortalWhereInput;
  orderBy?: Array<PortalOrderByInput>;
  skip?: number;
  take?: number;
};
