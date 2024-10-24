import { Entity } from "../entity/Entity";
import { Trait } from "../trait/Trait";

export type Template = {
  createdAt: Date;
  entities?: Array<Entity>;
  id: string;
  traits?: Array<Trait>;
  updatedAt: Date;
};
