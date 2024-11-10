import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PortalWhereUniqueInput } from "../portal/PortalWhereUniqueInput";

export type AreaTeleportTriggerWhereInput = {
  area?: AreaWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
  portal?: PortalWhereUniqueInput;
};
