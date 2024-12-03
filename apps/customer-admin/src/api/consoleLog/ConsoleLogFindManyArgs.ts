import { ConsoleLogWhereInput } from "./ConsoleLogWhereInput";
import { ConsoleLogOrderByInput } from "./ConsoleLogOrderByInput";

export type ConsoleLogFindManyArgs = {
  where?: ConsoleLogWhereInput;
  orderBy?: Array<ConsoleLogOrderByInput>;
  skip?: number;
  take?: number;
};
