import { Association } from "../association/Association";
import { User } from "../user/User";
import { Template } from "../template/Template";

export type Entity = {
  createdAt: Date;
  description: string | null;
  displayName: string | null;
  id: string;
  incomingAssociations?: Array<Association>;
  name: string | null;
  outgoingAssociations?: Array<Association>;
  owner?: User | null;
  template?: Template | null;
  updatedAt: Date;
  version: string | null;
};
