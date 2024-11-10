import { EmailQueueWhereInput } from "./EmailQueueWhereInput";
import { EmailQueueOrderByInput } from "./EmailQueueOrderByInput";

export type EmailQueueFindManyArgs = {
  where?: EmailQueueWhereInput;
  orderBy?: Array<EmailQueueOrderByInput>;
  skip?: number;
  take?: number;
};
