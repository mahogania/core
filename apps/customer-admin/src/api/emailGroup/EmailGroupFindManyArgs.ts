import { EmailGroupWhereInput } from "./EmailGroupWhereInput";
import { EmailGroupOrderByInput } from "./EmailGroupOrderByInput";

export type EmailGroupFindManyArgs = {
  where?: EmailGroupWhereInput;
  orderBy?: Array<EmailGroupOrderByInput>;
  skip?: number;
  take?: number;
};
