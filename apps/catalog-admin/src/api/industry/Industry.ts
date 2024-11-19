import { Business } from "../business/Business";
import { Relation } from "../relation/Relation";

export type Industry = {
  businesses?: Array<Business>;
  createdAt: Date;
  id: string;
  relations?: Array<Relation>;
  updatedAt: Date;
};
