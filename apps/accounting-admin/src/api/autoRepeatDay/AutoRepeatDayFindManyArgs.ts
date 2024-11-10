import { AutoRepeatDayWhereInput } from "./AutoRepeatDayWhereInput";
import { AutoRepeatDayOrderByInput } from "./AutoRepeatDayOrderByInput";

export type AutoRepeatDayFindManyArgs = {
  where?: AutoRepeatDayWhereInput;
  orderBy?: Array<AutoRepeatDayOrderByInput>;
  skip?: number;
  take?: number;
};
