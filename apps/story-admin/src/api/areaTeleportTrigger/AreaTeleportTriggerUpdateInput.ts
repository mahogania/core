import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { PortalWhereUniqueInput } from "../portal/PortalWhereUniqueInput";

export type AreaTeleportTriggerUpdateInput = {
  area?: AreaWhereUniqueInput;
  name?: string;
  portal?: PortalWhereUniqueInput;
};
