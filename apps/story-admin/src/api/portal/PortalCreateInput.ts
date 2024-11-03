import { AreaTeleportTriggerCreateNestedManyWithoutPortalsInput } from "./AreaTeleportTriggerCreateNestedManyWithoutPortalsInput";

export type PortalCreateInput = {
  areaTeleportTriggers?: AreaTeleportTriggerCreateNestedManyWithoutPortalsInput;
  location: string;
};
