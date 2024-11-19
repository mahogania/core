import { JsonValue } from "type-fest";
import { Form } from "../form/Form";

export type Template = {
  createdAt: Date;
  fields: JsonValue;
  form?: Form | null;
  id: string;
  updatedAt: Date;
  url: string | null;
};
