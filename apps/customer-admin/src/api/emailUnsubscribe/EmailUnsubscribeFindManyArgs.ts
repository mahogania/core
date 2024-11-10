import { EmailUnsubscribeWhereInput } from "./EmailUnsubscribeWhereInput";
import { EmailUnsubscribeOrderByInput } from "./EmailUnsubscribeOrderByInput";

export type EmailUnsubscribeFindManyArgs = {
  where?: EmailUnsubscribeWhereInput;
  orderBy?: Array<EmailUnsubscribeOrderByInput>;
  skip?: number;
  take?: number;
};
