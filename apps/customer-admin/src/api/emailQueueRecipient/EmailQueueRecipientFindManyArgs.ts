import { EmailQueueRecipientWhereInput } from "./EmailQueueRecipientWhereInput";
import { EmailQueueRecipientOrderByInput } from "./EmailQueueRecipientOrderByInput";

export type EmailQueueRecipientFindManyArgs = {
  where?: EmailQueueRecipientWhereInput;
  orderBy?: Array<EmailQueueRecipientOrderByInput>;
  skip?: number;
  take?: number;
};
