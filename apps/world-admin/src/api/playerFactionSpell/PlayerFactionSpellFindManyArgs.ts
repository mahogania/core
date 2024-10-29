import { PlayerFactionSpellWhereInput } from "./PlayerFactionSpellWhereInput";
import { PlayerFactionSpellOrderByInput } from "./PlayerFactionSpellOrderByInput";

export type PlayerFactionSpellFindManyArgs = {
  where?: PlayerFactionSpellWhereInput;
  orderBy?: Array<PlayerFactionSpellOrderByInput>;
  skip?: number;
  take?: number;
};
