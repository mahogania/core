import { InstanceTemplate } from "../instanceTemplate/InstanceTemplate";

export type LinkedRespawn = {
  createdAt: Date;
  id: string;
  instanceTemplates?: Array<InstanceTemplate>;
  updatedAt: Date;
};
