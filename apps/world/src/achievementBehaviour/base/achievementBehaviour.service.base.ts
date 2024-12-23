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
  AchievementBehaviour as PrismaAchievementBehaviour,
  Achievement as PrismaAchievement,
} from "@prisma/client";

export class AchievementBehaviourServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AchievementBehaviourCountArgs, "select">
  ): Promise<number> {
    return this.prisma.achievementBehaviour.count(args);
  }

  async achievementBehaviours(
    args: Prisma.AchievementBehaviourFindManyArgs
  ): Promise<PrismaAchievementBehaviour[]> {
    return this.prisma.achievementBehaviour.findMany(args);
  }
  async achievementBehaviour(
    args: Prisma.AchievementBehaviourFindUniqueArgs
  ): Promise<PrismaAchievementBehaviour | null> {
    return this.prisma.achievementBehaviour.findUnique(args);
  }
  async createAchievementBehaviour(
    args: Prisma.AchievementBehaviourCreateArgs
  ): Promise<PrismaAchievementBehaviour> {
    return this.prisma.achievementBehaviour.create(args);
  }
  async updateAchievementBehaviour(
    args: Prisma.AchievementBehaviourUpdateArgs
  ): Promise<PrismaAchievementBehaviour> {
    return this.prisma.achievementBehaviour.update(args);
  }
  async deleteAchievementBehaviour(
    args: Prisma.AchievementBehaviourDeleteArgs
  ): Promise<PrismaAchievementBehaviour> {
    return this.prisma.achievementBehaviour.delete(args);
  }

  async getAchievement(parentId: string): Promise<PrismaAchievement | null> {
    return this.prisma.achievementBehaviour
      .findUnique({
        where: { id: parentId },
      })
      .achievement();
  }
}
