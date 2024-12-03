import { CampaignItemWhereInput } from "./CampaignItemWhereInput";
import { CampaignItemOrderByInput } from "./CampaignItemOrderByInput";

export type CampaignItemFindManyArgs = {
  where?: CampaignItemWhereInput;
  orderBy?: Array<CampaignItemOrderByInput>;
  skip?: number;
  take?: number;
};
