import { User } from "../user/User";
import { World } from "../world/World";

export type Realm = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  users?: Array<User>;
  world?: World | null;
};
