import { Feature } from "../feature/Feature";
import { Configuration } from "../configuration/Configuration";

export type Bundle = {
  createdAt: Date;
  features?: Array<Feature>;
  id: string;
  lineItemConfiguration?: Configuration | null;
  updatedAt: Date;
};
