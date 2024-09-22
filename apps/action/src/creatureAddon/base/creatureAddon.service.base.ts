/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CreatureAddon as PrismaCreatureAddon } from "@prisma/client";

export class CreatureAddonServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CreatureAddonCountArgs, "select">
  ): Promise<number> {
    return this.prisma.creatureAddon.count(args);
  }

  async creatureAddons(
    args: Prisma.CreatureAddonFindManyArgs
  ): Promise<PrismaCreatureAddon[]> {
    return this.prisma.creatureAddon.findMany(args);
  }
  async creatureAddon(
    args: Prisma.CreatureAddonFindUniqueArgs
  ): Promise<PrismaCreatureAddon | null> {
    return this.prisma.creatureAddon.findUnique(args);
  }
  async createCreatureAddon(
    args: Prisma.CreatureAddonCreateArgs
  ): Promise<PrismaCreatureAddon> {
    return this.prisma.creatureAddon.create(args);
  }
  async updateCreatureAddon(
    args: Prisma.CreatureAddonUpdateArgs
  ): Promise<PrismaCreatureAddon> {
    return this.prisma.creatureAddon.update(args);
  }
  async deleteCreatureAddon(
    args: Prisma.CreatureAddonDeleteArgs
  ): Promise<PrismaCreatureAddon> {
    return this.prisma.creatureAddon.delete(args);
  }
}
