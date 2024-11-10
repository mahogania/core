import { QuestCreateNestedManyWithoutUsersInput } from "./QuestCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ScenarioCreateNestedManyWithoutUsersInput } from "./ScenarioCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  quests?: QuestCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  scenarios?: ScenarioCreateNestedManyWithoutUsersInput;
  username: string;
};
