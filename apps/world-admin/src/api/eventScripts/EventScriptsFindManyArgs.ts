import { EventScriptsWhereInput } from "./EventScriptsWhereInput";
import { EventScriptsOrderByInput } from "./EventScriptsOrderByInput";

export type EventScriptsFindManyArgs = {
  where?: EventScriptsWhereInput;
  orderBy?: Array<EventScriptsOrderByInput>;
  skip?: number;
  take?: number;
};
