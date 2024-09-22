import { PlayerRacestatsWhereInput } from "./PlayerRacestatsWhereInput";
import { PlayerRacestatsOrderByInput } from "./PlayerRacestatsOrderByInput";

export type PlayerRacestatsFindManyArgs = {
  where?: PlayerRacestatsWhereInput;
  orderBy?: Array<PlayerRacestatsOrderByInput>;
  skip?: number;
  take?: number;
};
