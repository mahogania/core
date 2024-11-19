import { Configuration } from "../configuration/Configuration";
import { Quote } from "../quote/Quote";

export type Item = {
  configuration?: Configuration | null;
  createdAt: Date;
  id: string;
  quote?: Quote | null;
  updatedAt: Date;
};
