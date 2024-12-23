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
  CreatureTemplateAddon as PrismaCreatureTemplateAddon,
} from "@prisma/client";

export class CreatureTemplateAddonServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CreatureTemplateAddonCountArgs, "select">
  ): Promise<number> {
    return this.prisma.creatureTemplateAddon.count(args);
  }

  async creatureTemplateAddons(
    args: Prisma.CreatureTemplateAddonFindManyArgs
  ): Promise<PrismaCreatureTemplateAddon[]> {
    return this.prisma.creatureTemplateAddon.findMany(args);
  }
  async creatureTemplateAddon(
    args: Prisma.CreatureTemplateAddonFindUniqueArgs
  ): Promise<PrismaCreatureTemplateAddon | null> {
    return this.prisma.creatureTemplateAddon.findUnique(args);
  }
  async createCreatureTemplateAddon(
    args: Prisma.CreatureTemplateAddonCreateArgs
  ): Promise<PrismaCreatureTemplateAddon> {
    return this.prisma.creatureTemplateAddon.create(args);
  }
  async updateCreatureTemplateAddon(
    args: Prisma.CreatureTemplateAddonUpdateArgs
  ): Promise<PrismaCreatureTemplateAddon> {
    return this.prisma.creatureTemplateAddon.update(args);
  }
  async deleteCreatureTemplateAddon(
    args: Prisma.CreatureTemplateAddonDeleteArgs
  ): Promise<PrismaCreatureTemplateAddon> {
    return this.prisma.creatureTemplateAddon.delete(args);
  }
}
