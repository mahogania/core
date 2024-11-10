import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { PortalWhereUniqueInput } from "../portal/PortalWhereUniqueInput";

export type AreaTeleportTriggerCreateInput = {
  area: AreaWhereUniqueInput;
  name: string;
  portal: PortalWhereUniqueInput;
};
