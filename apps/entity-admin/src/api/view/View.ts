import { Fragment } from "../fragment/Fragment";
import { Processor } from "../processor/Processor";

export type View = {
  createdAt: Date;
  fragment?: Fragment | null;
  id: string;
  processor?: Processor | null;
  updatedAt: Date;
};
