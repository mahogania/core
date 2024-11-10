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
  Feature as PrismaFeature,
  Option as PrismaOption,
  Strength as PrismaStrength,
  Weakness as PrismaWeakness,
  Bundle as PrismaBundle,
} from "@prisma/client";

export class FeatureServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FeatureCountArgs, "select">): Promise<number> {
    return this.prisma.feature.count(args);
  }

  async features(args: Prisma.FeatureFindManyArgs): Promise<PrismaFeature[]> {
    return this.prisma.feature.findMany(args);
  }
  async feature(
    args: Prisma.FeatureFindUniqueArgs
  ): Promise<PrismaFeature | null> {
    return this.prisma.feature.findUnique(args);
  }
  async createFeature(args: Prisma.FeatureCreateArgs): Promise<PrismaFeature> {
    return this.prisma.feature.create(args);
  }
  async updateFeature(args: Prisma.FeatureUpdateArgs): Promise<PrismaFeature> {
    return this.prisma.feature.update(args);
  }
  async deleteFeature(args: Prisma.FeatureDeleteArgs): Promise<PrismaFeature> {
    return this.prisma.feature.delete(args);
  }

  async findOptions(
    parentId: string,
    args: Prisma.OptionFindManyArgs
  ): Promise<PrismaOption[]> {
    return this.prisma.feature
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .options(args);
  }

  async findStrength(
    parentId: string,
    args: Prisma.StrengthFindManyArgs
  ): Promise<PrismaStrength[]> {
    return this.prisma.feature
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .strength(args);
  }

  async findWeaknesses(
    parentId: string,
    args: Prisma.WeaknessFindManyArgs
  ): Promise<PrismaWeakness[]> {
    return this.prisma.feature
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .weaknesses(args);
  }

  async getBundle(parentId: string): Promise<PrismaBundle | null> {
    return this.prisma.feature
      .findUnique({
        where: { id: parentId },
      })
      .bundle();
  }
}