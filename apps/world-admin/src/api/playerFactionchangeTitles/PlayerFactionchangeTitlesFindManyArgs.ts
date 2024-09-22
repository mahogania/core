import { PlayerFactionchangeTitlesWhereInput } from "./PlayerFactionchangeTitlesWhereInput";
import { PlayerFactionchangeTitlesOrderByInput } from "./PlayerFactionchangeTitlesOrderByInput";

export type PlayerFactionchangeTitlesFindManyArgs = {
  where?: PlayerFactionchangeTitlesWhereInput;
  orderBy?: Array<PlayerFactionchangeTitlesOrderByInput>;
  skip?: number;
  take?: number;
};
