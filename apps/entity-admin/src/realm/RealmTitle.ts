import { Realm as TRealm } from "../api/realm/Realm";

export const REALM_TITLE_FIELD = "id";

export const RealmTitle = (record: TRealm): string => {
  return record.id?.toString() || String(record.id);
};
