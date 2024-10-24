import { InputJsonValue } from "../../types";
import { FormWhereUniqueInput } from "../form/FormWhereUniqueInput";

export type TemplateCreateInput = {
  fields?: InputJsonValue;
  form?: FormWhereUniqueInput | null;
  url?: string | null;
};
