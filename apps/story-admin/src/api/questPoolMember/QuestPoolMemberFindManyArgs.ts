import { QuestPoolMemberWhereInput } from "./QuestPoolMemberWhereInput";
import { QuestPoolMemberOrderByInput } from "./QuestPoolMemberOrderByInput";

export type QuestPoolMemberFindManyArgs = {
  where?: QuestPoolMemberWhereInput;
  orderBy?: Array<QuestPoolMemberOrderByInput>;
  skip?: number;
  take?: number;
};
