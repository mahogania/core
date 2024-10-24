import { Attribute } from "../attribute/Attribute";
import { Trait } from "../trait/Trait";
import { View } from "../view/View";

export type Fragment = {
  attributes?: Array<Attribute>;
  createdAt: Date;
  description: string | null;
  displayName: string | null;
  id: string;
  name: string | null;
  trait?: Trait | null;
  updatedAt: Date;
  views?: Array<View>;
};
