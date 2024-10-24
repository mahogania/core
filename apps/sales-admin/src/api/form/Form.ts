import { Process } from "../process/Process";
import { JsonValue } from "type-fest";
import { Template } from "../template/Template";

export type Form = {
  createdAt: Date;
  id: string;
  process?: Process | null;
  schema: JsonValue;
  templates?: Array<Template>;
  updatedAt: Date;
};
