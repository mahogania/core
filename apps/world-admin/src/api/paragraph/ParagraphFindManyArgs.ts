import { ParagraphWhereInput } from "./ParagraphWhereInput";
import { ParagraphOrderByInput } from "./ParagraphOrderByInput";

export type ParagraphFindManyArgs = {
  where?: ParagraphWhereInput;
  orderBy?: Array<ParagraphOrderByInput>;
  skip?: number;
  take?: number;
};
