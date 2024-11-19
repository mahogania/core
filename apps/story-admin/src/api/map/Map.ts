import { Zone } from "../zone/Zone";

export type Map = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  zones?: Array<Zone>;
};
