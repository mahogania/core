import { InputJsonValue } from "../../types";
import { FormWhereUniqueInput } from "../form/FormWhereUniqueInput";

export type TemplateUpdateInput = {
  fields?: InputJsonValue;
  form?: FormWhereUniqueInput | null;
  url?: string | null;
};
