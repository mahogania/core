import { RepresentationWhereInput } from "./RepresentationWhereInput";
import { RepresentationOrderByInput } from "./RepresentationOrderByInput";

export type RepresentationFindManyArgs = {
  where?: RepresentationWhereInput;
  orderBy?: Array<RepresentationOrderByInput>;
  skip?: number;
  take?: number;
};
