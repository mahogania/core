import { Pipeline } from "../pipeline/Pipeline";
import { Form } from "../form/Form";

export type Process = {
  Pipeline?: Pipeline | null;
  createdAt: Date;
  forms?: Array<Form>;
  id: string;
  updatedAt: Date;
};
