import { ChoiceLocale } from "../choiceLocale/ChoiceLocale";
import { Response } from "../response/Response";

export type Choice = {
  choiceLocales?: ChoiceLocale | null;
  createdAt: Date;
  id: string;
  name: string | null;
  responses?: Response | null;
  updatedAt: Date;
};
