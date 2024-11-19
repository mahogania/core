import { Configuration } from "../configuration/Configuration";
import { Feature } from "../feature/Feature";

export type Bundle = {
  Configuration?: Configuration;
  createdAt: Date;
  features?: Array<Feature>;
  id: string;
  updatedAt: Date;
};
