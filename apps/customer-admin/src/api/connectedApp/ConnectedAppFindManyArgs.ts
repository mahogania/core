import { ConnectedAppWhereInput } from "./ConnectedAppWhereInput";
import { ConnectedAppOrderByInput } from "./ConnectedAppOrderByInput";

export type ConnectedAppFindManyArgs = {
  where?: ConnectedAppWhereInput;
  orderBy?: Array<ConnectedAppOrderByInput>;
  skip?: number;
  take?: number;
};
