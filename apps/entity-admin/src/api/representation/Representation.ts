import { Entity } from "../entity/Entity";

export type Representation = {
  createdAt: Date;
  entities?: Array<Entity>;
  id: string;
  updatedAt: Date;
};
