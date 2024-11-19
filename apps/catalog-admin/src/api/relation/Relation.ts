import { Business } from "../business/Business";
import { Industry } from "../industry/Industry";

export type Relation = {
  ascendantBusiness?: Business | null;
  createdAt: Date;
  descendantBusiness?: Business | null;
  id: string;
  industry?: Industry | null;
  kind?: "Cooperation" | "Competition" | null;
  updatedAt: Date;
};
