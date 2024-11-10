import { UserCreateNestedManyWithoutRealmsInput } from "./UserCreateNestedManyWithoutRealmsInput";
import { WorldWhereUniqueInput } from "../world/WorldWhereUniqueInput";

export type RealmCreateInput = {
  users?: UserCreateNestedManyWithoutRealmsInput;
  world?: WorldWhereUniqueInput | null;
};
