import { EntityCreateNestedManyWithoutUsersInput } from "./EntityCreateNestedManyWithoutUsersInput";
import { RealmCreateNestedManyWithoutUsersInput } from "./RealmCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  entities?: EntityCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  realms?: RealmCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  sessionId?: string | null;
  supertokensId?: string | null;
  username: string;
};
