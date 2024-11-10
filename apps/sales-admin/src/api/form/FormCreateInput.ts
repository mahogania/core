import { ProcessWhereUniqueInput } from "../process/ProcessWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TemplateCreateNestedManyWithoutFormsInput } from "./TemplateCreateNestedManyWithoutFormsInput";

export type FormCreateInput = {
  process?: ProcessWhereUniqueInput | null;
  schema?: InputJsonValue;
  templates?: TemplateCreateNestedManyWithoutFormsInput;
};
