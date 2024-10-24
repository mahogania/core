import { RealmWhereInput } from "./RealmWhereInput";
import { RealmOrderByInput } from "./RealmOrderByInput";

export type RealmFindManyArgs = {
  where?: RealmWhereInput;
  orderBy?: Array<RealmOrderByInput>;
  skip?: number;
  take?: number;
};
