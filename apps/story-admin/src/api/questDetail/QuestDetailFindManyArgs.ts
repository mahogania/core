import { QuestDetailWhereInput } from "./QuestDetailWhereInput";
import { QuestDetailOrderByInput } from "./QuestDetailOrderByInput";

export type QuestDetailFindManyArgs = {
  where?: QuestDetailWhereInput;
  orderBy?: Array<QuestDetailOrderByInput>;
  skip?: number;
  take?: number;
};
