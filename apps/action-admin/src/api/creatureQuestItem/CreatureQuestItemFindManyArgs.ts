import { CreatureQuestItemWhereInput } from "./CreatureQuestItemWhereInput";
import { CreatureQuestItemOrderByInput } from "./CreatureQuestItemOrderByInput";

export type CreatureQuestItemFindManyArgs = {
  where?: CreatureQuestItemWhereInput;
  orderBy?: Array<CreatureQuestItemOrderByInput>;
  skip?: number;
  take?: number;
};
