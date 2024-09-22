import { EventScriptNamesWhereInput } from "./EventScriptNamesWhereInput";
import { EventScriptNamesOrderByInput } from "./EventScriptNamesOrderByInput";

export type EventScriptNamesFindManyArgs = {
  where?: EventScriptNamesWhereInput;
  orderBy?: Array<EventScriptNamesOrderByInput>;
  skip?: number;
  take?: number;
};
