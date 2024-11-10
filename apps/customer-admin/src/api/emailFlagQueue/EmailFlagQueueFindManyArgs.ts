import { EmailFlagQueueWhereInput } from "./EmailFlagQueueWhereInput";
import { EmailFlagQueueOrderByInput } from "./EmailFlagQueueOrderByInput";

export type EmailFlagQueueFindManyArgs = {
  where?: EmailFlagQueueWhereInput;
  orderBy?: Array<EmailFlagQueueOrderByInput>;
  skip?: number;
  take?: number;
};
