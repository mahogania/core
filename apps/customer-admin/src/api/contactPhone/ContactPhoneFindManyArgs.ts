import { ContactPhoneWhereInput } from "./ContactPhoneWhereInput";
import { ContactPhoneOrderByInput } from "./ContactPhoneOrderByInput";

export type ContactPhoneFindManyArgs = {
  where?: ContactPhoneWhereInput;
  orderBy?: Array<ContactPhoneOrderByInput>;
  skip?: number;
  take?: number;
};
