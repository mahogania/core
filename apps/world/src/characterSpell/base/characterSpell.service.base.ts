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
  CharacterSpell as PrismaCharacterSpell,
  Character as PrismaCharacter,
} from "@prisma/client";

export class CharacterSpellServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CharacterSpellCountArgs, "select">
  ): Promise<number> {
    return this.prisma.characterSpell.count(args);
  }

  async characterSpells(
    args: Prisma.CharacterSpellFindManyArgs
  ): Promise<PrismaCharacterSpell[]> {
    return this.prisma.characterSpell.findMany(args);
  }
  async characterSpell(
    args: Prisma.CharacterSpellFindUniqueArgs
  ): Promise<PrismaCharacterSpell | null> {
    return this.prisma.characterSpell.findUnique(args);
  }
  async createCharacterSpell(
    args: Prisma.CharacterSpellCreateArgs
  ): Promise<PrismaCharacterSpell> {
    return this.prisma.characterSpell.create(args);
  }
  async updateCharacterSpell(
    args: Prisma.CharacterSpellUpdateArgs
  ): Promise<PrismaCharacterSpell> {
    return this.prisma.characterSpell.update(args);
  }
  async deleteCharacterSpell(
    args: Prisma.CharacterSpellDeleteArgs
  ): Promise<PrismaCharacterSpell> {
    return this.prisma.characterSpell.delete(args);
  }

  async findCharacters(
    parentId: string,
    args: Prisma.CharacterFindManyArgs
  ): Promise<PrismaCharacter[]> {
    return this.prisma.characterSpell
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .characters(args);
  }
}
