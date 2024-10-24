import { Business } from "../business/Business";
import { Feature } from "../feature/Feature";

export type Strength = {
  competitor?: Business | null;
  createdAt: Date;
  features?: Array<Feature>;
  id: string;
  updatedAt: Date;
};
