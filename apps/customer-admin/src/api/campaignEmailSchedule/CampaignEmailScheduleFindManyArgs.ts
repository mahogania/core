import { CampaignEmailScheduleWhereInput } from "./CampaignEmailScheduleWhereInput";
import { CampaignEmailScheduleOrderByInput } from "./CampaignEmailScheduleOrderByInput";

export type CampaignEmailScheduleFindManyArgs = {
  where?: CampaignEmailScheduleWhereInput;
  orderBy?: Array<CampaignEmailScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
