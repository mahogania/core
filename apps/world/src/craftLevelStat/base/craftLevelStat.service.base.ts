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
  CraftLevelStat as PrismaCraftLevelStat,
  Craft as PrismaCraft,
} from "@prisma/client";

export class CraftLevelStatServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CraftLevelStatCountArgs, "select">
  ): Promise<number> {
    return this.prisma.craftLevelStat.count(args);
  }

  async craftLevelStats(
    args: Prisma.CraftLevelStatFindManyArgs
  ): Promise<PrismaCraftLevelStat[]> {
    return this.prisma.craftLevelStat.findMany(args);
  }
  async craftLevelStat(
    args: Prisma.CraftLevelStatFindUniqueArgs
  ): Promise<PrismaCraftLevelStat | null> {
    return this.prisma.craftLevelStat.findUnique(args);
  }
  async createCraftLevelStat(
    args: Prisma.CraftLevelStatCreateArgs
  ): Promise<PrismaCraftLevelStat> {
    return this.prisma.craftLevelStat.create(args);
  }
  async updateCraftLevelStat(
    args: Prisma.CraftLevelStatUpdateArgs
  ): Promise<PrismaCraftLevelStat> {
    return this.prisma.craftLevelStat.update(args);
  }
  async deleteCraftLevelStat(
    args: Prisma.CraftLevelStatDeleteArgs
  ): Promise<PrismaCraftLevelStat> {
    return this.prisma.craftLevelStat.delete(args);
  }

  async getCraft(parentId: string): Promise<PrismaCraft | null> {
    return this.prisma.craftLevelStat
      .findUnique({
        where: { id: parentId },
      })
      .craft();
  }
}
