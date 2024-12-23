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
  Weakness as PrismaWeakness,
  Feature as PrismaFeature,
  Business as PrismaBusiness,
} from "@prisma/client";

export class WeaknessServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.WeaknessCountArgs, "select">): Promise<number> {
    return this.prisma.weakness.count(args);
  }

  async weaknesses(
    args: Prisma.WeaknessFindManyArgs
  ): Promise<PrismaWeakness[]> {
    return this.prisma.weakness.findMany(args);
  }
  async weakness(
    args: Prisma.WeaknessFindUniqueArgs
  ): Promise<PrismaWeakness | null> {
    return this.prisma.weakness.findUnique(args);
  }
  async createWeakness(
    args: Prisma.WeaknessCreateArgs
  ): Promise<PrismaWeakness> {
    return this.prisma.weakness.create(args);
  }
  async updateWeakness(
    args: Prisma.WeaknessUpdateArgs
  ): Promise<PrismaWeakness> {
    return this.prisma.weakness.update(args);
  }
  async deleteWeakness(
    args: Prisma.WeaknessDeleteArgs
  ): Promise<PrismaWeakness> {
    return this.prisma.weakness.delete(args);
  }

  async findFeatures(
    parentId: string,
    args: Prisma.FeatureFindManyArgs
  ): Promise<PrismaFeature[]> {
    return this.prisma.weakness
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .features(args);
  }

  async getCompetitor(parentId: string): Promise<PrismaBusiness | null> {
    return this.prisma.weakness
      .findUnique({
        where: { id: parentId },
      })
      .competitor();
  }
}
