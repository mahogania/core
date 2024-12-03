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
  CreatureTemplateSpell as PrismaCreatureTemplateSpell,
} from "@prisma/client";

export class CreatureTemplateSpellServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CreatureTemplateSpellCountArgs, "select">
  ): Promise<number> {
    return this.prisma.creatureTemplateSpell.count(args);
  }

  async creatureTemplateSpells(
    args: Prisma.CreatureTemplateSpellFindManyArgs
  ): Promise<PrismaCreatureTemplateSpell[]> {
    return this.prisma.creatureTemplateSpell.findMany(args);
  }
  async creatureTemplateSpell(
    args: Prisma.CreatureTemplateSpellFindUniqueArgs
  ): Promise<PrismaCreatureTemplateSpell | null> {
    return this.prisma.creatureTemplateSpell.findUnique(args);
  }
  async createCreatureTemplateSpell(
    args: Prisma.CreatureTemplateSpellCreateArgs
  ): Promise<PrismaCreatureTemplateSpell> {
    return this.prisma.creatureTemplateSpell.create(args);
  }
  async updateCreatureTemplateSpell(
    args: Prisma.CreatureTemplateSpellUpdateArgs
  ): Promise<PrismaCreatureTemplateSpell> {
    return this.prisma.creatureTemplateSpell.update(args);
  }
  async deleteCreatureTemplateSpell(
    args: Prisma.CreatureTemplateSpellDeleteArgs
  ): Promise<PrismaCreatureTemplateSpell> {
    return this.prisma.creatureTemplateSpell.delete(args);
  }
}
