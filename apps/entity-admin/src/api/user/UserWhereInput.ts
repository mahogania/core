import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EntityListRelationFilter } from "../entity/EntityListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RealmListRelationFilter } from "../realm/RealmListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  entities?: EntityListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  realms?: RealmListRelationFilter;
  sessionId?: StringNullableFilter;
  supertokensId?: StringNullableFilter;
  username?: StringFilter;
};
