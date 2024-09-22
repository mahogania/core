import { QuestPoolMembersWhereInput } from "./QuestPoolMembersWhereInput";
import { QuestPoolMembersOrderByInput } from "./QuestPoolMembersOrderByInput";

export type QuestPoolMembersFindManyArgs = {
  where?: QuestPoolMembersWhereInput;
  orderBy?: Array<QuestPoolMembersOrderByInput>;
  skip?: number;
  take?: number;
};
