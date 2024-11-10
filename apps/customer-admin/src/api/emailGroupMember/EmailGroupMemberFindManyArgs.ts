import { EmailGroupMemberWhereInput } from "./EmailGroupMemberWhereInput";
import { EmailGroupMemberOrderByInput } from "./EmailGroupMemberOrderByInput";

export type EmailGroupMemberFindManyArgs = {
  where?: EmailGroupMemberWhereInput;
  orderBy?: Array<EmailGroupMemberOrderByInput>;
  skip?: number;
  take?: number;
};
