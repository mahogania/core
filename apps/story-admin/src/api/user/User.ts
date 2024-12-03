import { Quest } from "../quest/Quest";
import { JsonValue } from "type-fest";
import { Scenario } from "../scenario/Scenario";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  quests?: Array<Quest>;
  roles: JsonValue;
  scenarios?: Array<Scenario>;
  updatedAt: Date;
  username: string;
};
