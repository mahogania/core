import { Paragraph } from "../paragraph/Paragraph";

export type ParagraphLocale = {
  createdAt: Date;
  id: string;
  paragraphs?: Array<Paragraph>;
  updatedAt: Date;
};
