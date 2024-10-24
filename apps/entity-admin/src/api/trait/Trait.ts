import { Command } from "../command/Command";
import { Fragment } from "../fragment/Fragment";
import { Template } from "../template/Template";

export type Trait = {
  commands?: Array<Command>;
  createdAt: Date;
  fragments?: Array<Fragment>;
  id: string;
  template?: Template | null;
  updatedAt: Date;
};
