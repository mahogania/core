import { QuestDetailsWhereInput } from "./QuestDetailsWhereInput";
import { QuestDetailsOrderByInput } from "./QuestDetailsOrderByInput";

export type QuestDetailsFindManyArgs = {
  where?: QuestDetailsWhereInput;
  orderBy?: Array<QuestDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
