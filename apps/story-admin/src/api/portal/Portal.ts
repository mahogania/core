import { AreaTeleportTrigger } from "../areaTeleportTrigger/AreaTeleportTrigger";

export type Portal = {
  areaTeleportTriggers?: Array<AreaTeleportTrigger>;
  createdAt: Date;
  id: string;
  location: string;
  updatedAt: Date;
};
