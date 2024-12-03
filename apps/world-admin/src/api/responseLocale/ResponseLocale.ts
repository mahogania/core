import { Response } from "../response/Response";

export type ResponseLocale = {
  createdAt: Date;
  id: string;
  responses?: Array<Response>;
  updatedAt: Date;
};
