import { Realm } from "../realm/Realm";

export type World = {
  createdAt: Date;
  id: string;
  realms?: Array<Realm>;
  updatedAt: Date;
};
