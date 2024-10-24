import { UserUpdateManyWithoutRealmsInput } from "./UserUpdateManyWithoutRealmsInput";
import { WorldWhereUniqueInput } from "../world/WorldWhereUniqueInput";

export type RealmUpdateInput = {
  users?: UserUpdateManyWithoutRealmsInput;
  world?: WorldWhereUniqueInput | null;
};
