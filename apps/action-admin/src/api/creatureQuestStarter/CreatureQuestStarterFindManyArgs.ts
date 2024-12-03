import { CreatureQuestStarterWhereInput } from "./CreatureQuestStarterWhereInput";
import { CreatureQuestStarterOrderByInput } from "./CreatureQuestStarterOrderByInput";

export type CreatureQuestStarterFindManyArgs = {
  where?: CreatureQuestStarterWhereInput;
  orderBy?: Array<CreatureQuestStarterOrderByInput>;
  skip?: number;
  take?: number;
};
