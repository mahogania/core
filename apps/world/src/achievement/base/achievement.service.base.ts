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
  Achievement as PrismaAchievement,
  AchievementBehaviour as PrismaAchievementBehaviour,
  AchievementReward as PrismaAchievementReward,
  Player as PrismaPlayer,
} from "@prisma/client";

export class AchievementServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AchievementCountArgs, "select">
  ): Promise<number> {
    return this.prisma.achievement.count(args);
  }

  async achievements(
    args: Prisma.AchievementFindManyArgs
  ): Promise<PrismaAchievement[]> {
    return this.prisma.achievement.findMany(args);
  }
  async achievement(
    args: Prisma.AchievementFindUniqueArgs
  ): Promise<PrismaAchievement | null> {
    return this.prisma.achievement.findUnique(args);
  }
  async createAchievement(
    args: Prisma.AchievementCreateArgs
  ): Promise<PrismaAchievement> {
    return this.prisma.achievement.create(args);
  }
  async updateAchievement(
    args: Prisma.AchievementUpdateArgs
  ): Promise<PrismaAchievement> {
    return this.prisma.achievement.update(args);
  }
  async deleteAchievement(
    args: Prisma.AchievementDeleteArgs
  ): Promise<PrismaAchievement> {
    return this.prisma.achievement.delete(args);
  }

  async findAchievementBehaviours(
    parentId: string,
    args: Prisma.AchievementBehaviourFindManyArgs
  ): Promise<PrismaAchievementBehaviour[]> {
    return this.prisma.achievement
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .achievementBehaviours(args);
  }

  async getAchievementRewards(
    parentId: string
  ): Promise<PrismaAchievementReward | null> {
    return this.prisma.achievement
      .findUnique({
        where: { id: parentId },
      })
      .achievementRewards();
  }

  async getPlayer(parentId: string): Promise<PrismaPlayer | null> {
    return this.prisma.achievement
      .findUnique({
        where: { id: parentId },
      })
      .player();
  }
}
