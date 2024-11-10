import { CalendarViewWhereInput } from "./CalendarViewWhereInput";
import { CalendarViewOrderByInput } from "./CalendarViewOrderByInput";

export type CalendarViewFindManyArgs = {
  where?: CalendarViewWhereInput;
  orderBy?: Array<CalendarViewOrderByInput>;
  skip?: number;
  take?: number;
};
