import { Association } from "../association/Association";
import { Agent } from "../agent/Agent";
import { User } from "../user/User";
import { Representation } from "../representation/Representation";
import { Template } from "../template/Template";

export type Entity = {
  PredecessorAssociations?: Array<Association>;
  agent?: Agent | null;
  createdAt: Date;
  description: string | null;
  displayName: string | null;
  id: string;
  name: string | null;
  owner?: User | null;
  representation?: Representation | null;
  successorAssociations?: Array<Association>;
  template?: Template | null;
  updatedAt: Date;
  version: string | null;
};
