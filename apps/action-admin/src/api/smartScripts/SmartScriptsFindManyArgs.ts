import { SmartScriptsWhereInput } from "./SmartScriptsWhereInput";
import { SmartScriptsOrderByInput } from "./SmartScriptsOrderByInput";

export type SmartScriptsFindManyArgs = {
  where?: SmartScriptsWhereInput;
  orderBy?: Array<SmartScriptsOrderByInput>;
  skip?: number;
  take?: number;
};
