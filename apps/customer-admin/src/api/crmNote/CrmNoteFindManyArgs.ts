import { CrmNoteWhereInput } from "./CrmNoteWhereInput";
import { CrmNoteOrderByInput } from "./CrmNoteOrderByInput";

export type CrmNoteFindManyArgs = {
  where?: CrmNoteWhereInput;
  orderBy?: Array<CrmNoteOrderByInput>;
  skip?: number;
  take?: number;
};
