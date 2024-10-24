import { ProcessWhereUniqueInput } from "../process/ProcessWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TemplateUpdateManyWithoutFormsInput } from "./TemplateUpdateManyWithoutFormsInput";

export type FormUpdateInput = {
  process?: ProcessWhereUniqueInput | null;
  schema?: InputJsonValue;
  templates?: TemplateUpdateManyWithoutFormsInput;
};
