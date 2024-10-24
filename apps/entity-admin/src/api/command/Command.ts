import { Processor } from "../processor/Processor";
import { Trait } from "../trait/Trait";

export type Command = {
  createdAt: Date;
  id: string;
  processor?: Processor | null;
  trait?: Trait | null;
  updatedAt: Date;
};
