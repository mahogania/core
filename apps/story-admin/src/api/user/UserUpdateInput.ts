import { QuestUpdateManyWithoutUsersInput } from "./QuestUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ScenarioUpdateManyWithoutUsersInput } from "./ScenarioUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  quests?: QuestUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  scenarios?: ScenarioUpdateManyWithoutUsersInput;
  username?: string;
};
