import { Choice } from "../choice/Choice";

export type ChoiceLocale = {
  choices?: Array<Choice>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
