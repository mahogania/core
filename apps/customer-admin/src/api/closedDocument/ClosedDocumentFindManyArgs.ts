import { ClosedDocumentWhereInput } from "./ClosedDocumentWhereInput";
import { ClosedDocumentOrderByInput } from "./ClosedDocumentOrderByInput";

export type ClosedDocumentFindManyArgs = {
  where?: ClosedDocumentWhereInput;
  orderBy?: Array<ClosedDocumentOrderByInput>;
  skip?: number;
  take?: number;
};
