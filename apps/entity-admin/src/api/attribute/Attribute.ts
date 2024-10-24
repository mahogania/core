import { Fragment } from "../fragment/Fragment";

export type Attribute = {
  createdAt: Date;
  fragment?: Fragment | null;
  id: string;
  updatedAt: Date;
};
