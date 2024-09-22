import { QuestVisualEffectWhereInput } from "./QuestVisualEffectWhereInput";
import { QuestVisualEffectOrderByInput } from "./QuestVisualEffectOrderByInput";

export type QuestVisualEffectFindManyArgs = {
  where?: QuestVisualEffectWhereInput;
  orderBy?: Array<QuestVisualEffectOrderByInput>;
  skip?: number;
  take?: number;
};
