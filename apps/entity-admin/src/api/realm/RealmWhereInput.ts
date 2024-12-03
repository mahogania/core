import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { WorldWhereUniqueInput } from "../world/WorldWhereUniqueInput";

export type RealmWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
  world?: WorldWhereUniqueInput;
};
