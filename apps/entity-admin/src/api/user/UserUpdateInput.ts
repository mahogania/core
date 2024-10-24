import { EntityUpdateManyWithoutUsersInput } from "./EntityUpdateManyWithoutUsersInput";
import { RealmUpdateManyWithoutUsersInput } from "./RealmUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  entities?: EntityUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  realms?: RealmUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  sessionId?: string | null;
  supertokensId?: string | null;
  username?: string;
};
