import { ClientScriptWhereInput } from "./ClientScriptWhereInput";
import { ClientScriptOrderByInput } from "./ClientScriptOrderByInput";

export type ClientScriptFindManyArgs = {
  where?: ClientScriptWhereInput;
  orderBy?: Array<ClientScriptOrderByInput>;
  skip?: number;
  take?: number;
};
