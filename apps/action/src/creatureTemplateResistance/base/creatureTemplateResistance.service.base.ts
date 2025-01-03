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
  CreatureTemplateResistance as PrismaCreatureTemplateResistance,
} from "@prisma/client";

export class CreatureTemplateResistanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CreatureTemplateResistanceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.creatureTemplateResistance.count(args);
  }

  async creatureTemplateResistances(
    args: Prisma.CreatureTemplateResistanceFindManyArgs
  ): Promise<PrismaCreatureTemplateResistance[]> {
    return this.prisma.creatureTemplateResistance.findMany(args);
  }
  async creatureTemplateResistance(
    args: Prisma.CreatureTemplateResistanceFindUniqueArgs
  ): Promise<PrismaCreatureTemplateResistance | null> {
    return this.prisma.creatureTemplateResistance.findUnique(args);
  }
  async createCreatureTemplateResistance(
    args: Prisma.CreatureTemplateResistanceCreateArgs
  ): Promise<PrismaCreatureTemplateResistance> {
    return this.prisma.creatureTemplateResistance.create(args);
  }
  async updateCreatureTemplateResistance(
    args: Prisma.CreatureTemplateResistanceUpdateArgs
  ): Promise<PrismaCreatureTemplateResistance> {
    return this.prisma.creatureTemplateResistance.update(args);
  }
  async deleteCreatureTemplateResistance(
    args: Prisma.CreatureTemplateResistanceDeleteArgs
  ): Promise<PrismaCreatureTemplateResistance> {
    return this.prisma.creatureTemplateResistance.delete(args);
  }
}
