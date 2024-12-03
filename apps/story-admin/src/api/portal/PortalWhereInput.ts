import { AreaTeleportTriggerListRelationFilter } from "../areaTeleportTrigger/AreaTeleportTriggerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type PortalWhereInput = {
  areaTeleportTriggers?: AreaTeleportTriggerListRelationFilter;
  id?: StringFilter;
  location?: StringFilter;
};
