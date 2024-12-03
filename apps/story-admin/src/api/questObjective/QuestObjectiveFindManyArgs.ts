import { QuestObjectiveWhereInput } from "./QuestObjectiveWhereInput";
import { QuestObjectiveOrderByInput } from "./QuestObjectiveOrderByInput";

export type QuestObjectiveFindManyArgs = {
  where?: QuestObjectiveWhereInput;
  orderBy?: Array<QuestObjectiveOrderByInput>;
  skip?: number;
  take?: number;
};
