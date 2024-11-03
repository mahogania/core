import { EmailDigestRecipientWhereInput } from "./EmailDigestRecipientWhereInput";
import { EmailDigestRecipientOrderByInput } from "./EmailDigestRecipientOrderByInput";

export type EmailDigestRecipientFindManyArgs = {
  where?: EmailDigestRecipientWhereInput;
  orderBy?: Array<EmailDigestRecipientOrderByInput>;
  skip?: number;
  take?: number;
};
