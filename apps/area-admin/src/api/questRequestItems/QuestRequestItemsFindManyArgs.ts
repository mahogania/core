import { QuestRequestItemsWhereInput } from "./QuestRequestItemsWhereInput";
import { QuestRequestItemsOrderByInput } from "./QuestRequestItemsOrderByInput";

export type QuestRequestItemsFindManyArgs = {
  where?: QuestRequestItemsWhereInput;
  orderBy?: Array<QuestRequestItemsOrderByInput>;
  skip?: number;
  take?: number;
};
