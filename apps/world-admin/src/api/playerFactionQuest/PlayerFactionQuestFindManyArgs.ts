import { PlayerFactionQuestWhereInput } from "./PlayerFactionQuestWhereInput";
import { PlayerFactionQuestOrderByInput } from "./PlayerFactionQuestOrderByInput";

export type PlayerFactionQuestFindManyArgs = {
  where?: PlayerFactionQuestWhereInput;
  orderBy?: Array<PlayerFactionQuestOrderByInput>;
  skip?: number;
  take?: number;
};
