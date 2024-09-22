import { ItemScriptNamesWhereInput } from "./ItemScriptNamesWhereInput";
import { ItemScriptNamesOrderByInput } from "./ItemScriptNamesOrderByInput";

export type ItemScriptNamesFindManyArgs = {
  where?: ItemScriptNamesWhereInput;
  orderBy?: Array<ItemScriptNamesOrderByInput>;
  skip?: number;
  take?: number;
};
