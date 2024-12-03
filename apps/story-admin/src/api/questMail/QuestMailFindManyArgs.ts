import { QuestMailWhereInput } from "./QuestMailWhereInput";
import { QuestMailOrderByInput } from "./QuestMailOrderByInput";

export type QuestMailFindManyArgs = {
  where?: QuestMailWhereInput;
  orderBy?: Array<QuestMailOrderByInput>;
  skip?: number;
  take?: number;
};
