import { LinkedRespawn } from "../linkedRespawn/LinkedRespawn";

export type InstanceTemplate = {
  createdAt: Date;
  id: string;
  linkedRespawns?: LinkedRespawn | null;
  updatedAt: Date;
};
