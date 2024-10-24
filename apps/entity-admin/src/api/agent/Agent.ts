import { Entity } from "../entity/Entity";

export type Agent = {
  createdAt: Date;
  entities?: Array<Entity>;
  id: string;
  updatedAt: Date;
};
