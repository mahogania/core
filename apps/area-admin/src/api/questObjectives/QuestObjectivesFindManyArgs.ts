import { QuestObjectivesWhereInput } from "./QuestObjectivesWhereInput";
import { QuestObjectivesOrderByInput } from "./QuestObjectivesOrderByInput";

export type QuestObjectivesFindManyArgs = {
  where?: QuestObjectivesWhereInput;
  orderBy?: Array<QuestObjectivesOrderByInput>;
  skip?: number;
  take?: number;
};
