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
  Character as PrismaCharacter,
  CharacterDialogue as PrismaCharacterDialogue,
  CharacterSpell as PrismaCharacterSpell,
} from "@prisma/client";

export class CharacterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CharacterCountArgs, "select">
  ): Promise<number> {
    return this.prisma.character.count(args);
  }

  async characters(
    args: Prisma.CharacterFindManyArgs
  ): Promise<PrismaCharacter[]> {
    return this.prisma.character.findMany(args);
  }
  async character(
    args: Prisma.CharacterFindUniqueArgs
  ): Promise<PrismaCharacter | null> {
    return this.prisma.character.findUnique(args);
  }
  async createCharacter(
    args: Prisma.CharacterCreateArgs
  ): Promise<PrismaCharacter> {
    return this.prisma.character.create(args);
  }
  async updateCharacter(
    args: Prisma.CharacterUpdateArgs
  ): Promise<PrismaCharacter> {
    return this.prisma.character.update(args);
  }
  async deleteCharacter(
    args: Prisma.CharacterDeleteArgs
  ): Promise<PrismaCharacter> {
    return this.prisma.character.delete(args);
  }

  async findCharacterDialogues(
    parentId: string,
    args: Prisma.CharacterDialogueFindManyArgs
  ): Promise<PrismaCharacterDialogue[]> {
    return this.prisma.character
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .characterDialogues(args);
  }

  async getCharacterSpells(
    parentId: string
  ): Promise<PrismaCharacterSpell | null> {
    return this.prisma.character
      .findUnique({
        where: { id: parentId },
      })
      .characterSpells();
  }
}