import { QuestGreetingWhereInput } from "./QuestGreetingWhereInput";
import { QuestGreetingOrderByInput } from "./QuestGreetingOrderByInput";

export type QuestGreetingFindManyArgs = {
  where?: QuestGreetingWhereInput;
  orderBy?: Array<QuestGreetingOrderByInput>;
  skip?: number;
  take?: number;
};
