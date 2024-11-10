import { ContactEmailWhereInput } from "./ContactEmailWhereInput";
import { ContactEmailOrderByInput } from "./ContactEmailOrderByInput";

export type ContactEmailFindManyArgs = {
  where?: ContactEmailWhereInput;
  orderBy?: Array<ContactEmailOrderByInput>;
  skip?: number;
  take?: number;
};
