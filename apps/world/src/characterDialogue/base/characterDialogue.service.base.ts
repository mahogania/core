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
  CharacterDialogue as PrismaCharacterDialogue,
  Character as PrismaCharacter,
  Paragraph as PrismaParagraph,
} from "@prisma/client";

export class CharacterDialogueServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CharacterDialogueCountArgs, "select">
  ): Promise<number> {
    return this.prisma.characterDialogue.count(args);
  }

  async characterDialogues(
    args: Prisma.CharacterDialogueFindManyArgs
  ): Promise<PrismaCharacterDialogue[]> {
    return this.prisma.characterDialogue.findMany(args);
  }
  async characterDialogue(
    args: Prisma.CharacterDialogueFindUniqueArgs
  ): Promise<PrismaCharacterDialogue | null> {
    return this.prisma.characterDialogue.findUnique(args);
  }
  async createCharacterDialogue(
    args: Prisma.CharacterDialogueCreateArgs
  ): Promise<PrismaCharacterDialogue> {
    return this.prisma.characterDialogue.create(args);
  }
  async updateCharacterDialogue(
    args: Prisma.CharacterDialogueUpdateArgs
  ): Promise<PrismaCharacterDialogue> {
    return this.prisma.characterDialogue.update(args);
  }
  async deleteCharacterDialogue(
    args: Prisma.CharacterDialogueDeleteArgs
  ): Promise<PrismaCharacterDialogue> {
    return this.prisma.characterDialogue.delete(args);
  }

  async findCharacters(
    parentId: string,
    args: Prisma.CharacterFindManyArgs
  ): Promise<PrismaCharacter[]> {
    return this.prisma.characterDialogue
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .characters(args);
  }

  async findParagraphs(
    parentId: string,
    args: Prisma.ParagraphFindManyArgs
  ): Promise<PrismaParagraph[]> {
    return this.prisma.characterDialogue
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .paragraphs(args);
  }
}