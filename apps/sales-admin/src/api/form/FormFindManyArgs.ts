import { FormWhereInput } from "./FormWhereInput";
import { FormOrderByInput } from "./FormOrderByInput";

export type FormFindManyArgs = {
  where?: FormWhereInput;
  orderBy?: Array<FormOrderByInput>;
  skip?: number;
  take?: number;
};
