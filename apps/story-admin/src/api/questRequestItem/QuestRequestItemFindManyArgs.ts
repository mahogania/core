import { QuestRequestItemWhereInput } from "./QuestRequestItemWhereInput";
import { QuestRequestItemOrderByInput } from "./QuestRequestItemOrderByInput";

export type QuestRequestItemFindManyArgs = {
  where?: QuestRequestItemWhereInput;
  orderBy?: Array<QuestRequestItemOrderByInput>;
  skip?: number;
  take?: number;
};
