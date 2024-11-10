import { Configuration } from "../configuration/Configuration";
import { Process } from "../process/Process";

export type Pipeline = {
  Configurations?: Array<Configuration>;
  createdAt: Date;
  id: string;
  processes?: Array<Process>;
  updatedAt: Date;
};
