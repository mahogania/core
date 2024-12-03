import { Area } from "../area/Area";
import { Portal } from "../portal/Portal";

export type AreaTeleportTrigger = {
  area?: Area;
  createdAt: Date;
  id: string;
  name: string;
  portal?: Portal;
  updatedAt: Date;
};
