import { Entity } from "../entity/Entity";

export type Association = {
  ascendant?: Entity | null;
  createdAt: Date;
  descendant?: Entity | null;
  description: string | null;
  displayName: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
