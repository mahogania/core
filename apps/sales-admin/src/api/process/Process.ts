import { Pipeline } from "../pipeline/Pipeline";
import { Form } from "../form/Form";
import { Threat } from "../threat/Threat";

export type Process = {
  Pipeline?: Pipeline | null;
  createdAt: Date;
  forms?: Array<Form>;
  id: string;
  threats?: Array<Threat>;
  updatedAt: Date;
};
