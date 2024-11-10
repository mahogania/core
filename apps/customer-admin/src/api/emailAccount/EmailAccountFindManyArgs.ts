import { EmailAccountWhereInput } from "./EmailAccountWhereInput";
import { EmailAccountOrderByInput } from "./EmailAccountOrderByInput";

export type EmailAccountFindManyArgs = {
  where?: EmailAccountWhereInput;
  orderBy?: Array<EmailAccountOrderByInput>;
  skip?: number;
  take?: number;
};
