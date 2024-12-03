import { QuestMailSenderWhereInput } from "./QuestMailSenderWhereInput";
import { QuestMailSenderOrderByInput } from "./QuestMailSenderOrderByInput";

export type QuestMailSenderFindManyArgs = {
  where?: QuestMailSenderWhereInput;
  orderBy?: Array<QuestMailSenderOrderByInput>;
  skip?: number;
  take?: number;
};
