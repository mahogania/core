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
  SkillFishingBaseLevel as PrismaSkillFishingBaseLevel,
} from "@prisma/client";

export class SkillFishingBaseLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SkillFishingBaseLevelCountArgs, "select">
  ): Promise<number> {
    return this.prisma.skillFishingBaseLevel.count(args);
  }

  async skillFishingBaseLevels(
    args: Prisma.SkillFishingBaseLevelFindManyArgs
  ): Promise<PrismaSkillFishingBaseLevel[]> {
    return this.prisma.skillFishingBaseLevel.findMany(args);
  }
  async skillFishingBaseLevel(
    args: Prisma.SkillFishingBaseLevelFindUniqueArgs
  ): Promise<PrismaSkillFishingBaseLevel | null> {
    return this.prisma.skillFishingBaseLevel.findUnique(args);
  }
  async createSkillFishingBaseLevel(
    args: Prisma.SkillFishingBaseLevelCreateArgs
  ): Promise<PrismaSkillFishingBaseLevel> {
    return this.prisma.skillFishingBaseLevel.create(args);
  }
  async updateSkillFishingBaseLevel(
    args: Prisma.SkillFishingBaseLevelUpdateArgs
  ): Promise<PrismaSkillFishingBaseLevel> {
    return this.prisma.skillFishingBaseLevel.update(args);
  }
  async deleteSkillFishingBaseLevel(
    args: Prisma.SkillFishingBaseLevelDeleteArgs
  ): Promise<PrismaSkillFishingBaseLevel> {
    return this.prisma.skillFishingBaseLevel.delete(args);
  }
}