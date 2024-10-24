import { Business } from "../business/Business";
import { Proposal } from "../proposal/Proposal";

export type Threat = {
  competitor?: Business | null;
  createdAt: Date;
  id: string;
  proposals?: Array<Proposal>;
  updatedAt: Date;
};
