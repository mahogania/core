import { EmailDomainWhereInput } from "./EmailDomainWhereInput";
import { EmailDomainOrderByInput } from "./EmailDomainOrderByInput";

export type EmailDomainFindManyArgs = {
  where?: EmailDomainWhereInput;
  orderBy?: Array<EmailDomainOrderByInput>;
  skip?: number;
  take?: number;
};
