import { QuestPoolWhereInput } from "./QuestPoolWhereInput";
import { QuestPoolOrderByInput } from "./QuestPoolOrderByInput";

export type QuestPoolFindManyArgs = {
  where?: QuestPoolWhereInput;
  orderBy?: Array<QuestPoolOrderByInput>;
  skip?: number;
  take?: number;
};
