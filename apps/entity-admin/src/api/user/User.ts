import { Entity } from "../entity/Entity";
import { Realm } from "../realm/Realm";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  entities?: Array<Entity>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  realms?: Array<Realm>;
  roles: JsonValue;
  sessionId: string | null;
  supertokensId: string | null;
  updatedAt: Date;
  username: string;
};
