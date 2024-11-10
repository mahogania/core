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
  AchievementRewardLocale as PrismaAchievementRewardLocale,
  AchievementReward as PrismaAchievementReward,
} from "@prisma/client";

export class AchievementRewardLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AchievementRewardLocaleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.achievementRewardLocale.count(args);
  }

  async achievementRewardLocales(
    args: Prisma.AchievementRewardLocaleFindManyArgs
  ): Promise<PrismaAchievementRewardLocale[]> {
    return this.prisma.achievementRewardLocale.findMany(args);
  }
  async achievementRewardLocale(
    args: Prisma.AchievementRewardLocaleFindUniqueArgs
  ): Promise<PrismaAchievementRewardLocale | null> {
    return this.prisma.achievementRewardLocale.findUnique(args);
  }
  async createAchievementRewardLocale(
    args: Prisma.AchievementRewardLocaleCreateArgs
  ): Promise<PrismaAchievementRewardLocale> {
    return this.prisma.achievementRewardLocale.create(args);
  }
  async updateAchievementRewardLocale(
    args: Prisma.AchievementRewardLocaleUpdateArgs
  ): Promise<PrismaAchievementRewardLocale> {
    return this.prisma.achievementRewardLocale.update(args);
  }
  async deleteAchievementRewardLocale(
    args: Prisma.AchievementRewardLocaleDeleteArgs
  ): Promise<PrismaAchievementRewardLocale> {
    return this.prisma.achievementRewardLocale.delete(args);
  }

  async findAchievementRewards(
    parentId: string,
    args: Prisma.AchievementRewardFindManyArgs
  ): Promise<PrismaAchievementReward[]> {
    return this.prisma.achievementRewardLocale
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .achievementRewards(args);
  }
}
