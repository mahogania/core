/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Paragraph as PrismaParagraph,
  CharacterDialogue as PrismaCharacterDialogue,
  ParagraphLocale as PrismaParagraphLocale,
} from "@prisma/client";

export class ParagraphServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ParagraphCountArgs, "select">
  ): Promise<number> {
    return this.prisma.paragraph.count(args);
  }

  async paragraphs(
    args: Prisma.ParagraphFindManyArgs
  ): Promise<PrismaParagraph[]> {
    return this.prisma.paragraph.findMany(args);
  }
  async paragraph(
    args: Prisma.ParagraphFindUniqueArgs
  ): Promise<PrismaParagraph | null> {
    return this.prisma.paragraph.findUnique(args);
  }
  async createParagraph(
    args: Prisma.ParagraphCreateArgs
  ): Promise<PrismaParagraph> {
    return this.prisma.paragraph.create(args);
  }
  async updateParagraph(
    args: Prisma.ParagraphUpdateArgs
  ): Promise<PrismaParagraph> {
    return this.prisma.paragraph.update(args);
  }
  async deleteParagraph(
    args: Prisma.ParagraphDeleteArgs
  ): Promise<PrismaParagraph> {
    return this.prisma.paragraph.delete(args);
  }

  async findCharacterLines(
    parentId: string,
    args: Prisma.CharacterDialogueFindManyArgs
  ): Promise<PrismaCharacterDialogue[]> {
    return this.prisma.paragraph
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .characterLines(args);
  }

  async getParagraphLocales(
    parentId: string
  ): Promise<PrismaParagraphLocale | null> {
    return this.prisma.paragraph
      .findUnique({
        where: { id: parentId },
      })
      .paragraphLocales();
  }
}