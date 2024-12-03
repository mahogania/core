import { HolidayListWhereInput } from "./HolidayListWhereInput";
import { HolidayListOrderByInput } from "./HolidayListOrderByInput";

export type HolidayListFindManyArgs = {
  where?: HolidayListWhereInput;
  orderBy?: Array<HolidayListOrderByInput>;
  skip?: number;
  take?: number;
};
