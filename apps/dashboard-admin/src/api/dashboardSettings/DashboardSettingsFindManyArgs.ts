import { DashboardSettingsWhereInput } from "./DashboardSettingsWhereInput";
import { DashboardSettingsOrderByInput } from "./DashboardSettingsOrderByInput";

export type DashboardSettingsFindManyArgs = {
  where?: DashboardSettingsWhereInput;
  orderBy?: Array<DashboardSettingsOrderByInput>;
  skip?: number;
  take?: number;
};
