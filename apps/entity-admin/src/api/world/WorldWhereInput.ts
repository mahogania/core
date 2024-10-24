import { StringFilter } from "../../util/StringFilter";
import { RealmListRelationFilter } from "../realm/RealmListRelationFilter";

export type WorldWhereInput = {
  id?: StringFilter;
  realms?: RealmListRelationFilter;
};
