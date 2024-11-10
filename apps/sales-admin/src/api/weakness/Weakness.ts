import { Business } from "../business/Business";
import { Feature } from "../feature/Feature";

export type Weakness = {
  competitor?: Business | null;
  createdAt: Date;
  features?: Array<Feature>;
  id: string;
  updatedAt: Date;
};
