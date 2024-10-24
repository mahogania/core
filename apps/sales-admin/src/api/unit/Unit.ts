import { Address } from "../address/Address";
import { Business } from "../business/Business";

export type Unit = {
  address?: Address | null;
  competitor?: Business | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
