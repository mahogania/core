import { MailLevelRewardWhereInput } from "./MailLevelRewardWhereInput";
import { MailLevelRewardOrderByInput } from "./MailLevelRewardOrderByInput";

export type MailLevelRewardFindManyArgs = {
  where?: MailLevelRewardWhereInput;
  orderBy?: Array<MailLevelRewardOrderByInput>;
  skip?: number;
  take?: number;
};
