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
  QuestOfferReward as PrismaQuestOfferReward,
} from "@prisma/client";

export class QuestOfferRewardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QuestOfferRewardCountArgs, "select">
  ): Promise<number> {
    return this.prisma.questOfferReward.count(args);
  }

  async questOfferRewards(
    args: Prisma.QuestOfferRewardFindManyArgs
  ): Promise<PrismaQuestOfferReward[]> {
    return this.prisma.questOfferReward.findMany(args);
  }
  async questOfferReward(
    args: Prisma.QuestOfferRewardFindUniqueArgs
  ): Promise<PrismaQuestOfferReward | null> {
    return this.prisma.questOfferReward.findUnique(args);
  }
  async createQuestOfferReward(
    args: Prisma.QuestOfferRewardCreateArgs
  ): Promise<PrismaQuestOfferReward> {
    return this.prisma.questOfferReward.create(args);
  }
  async updateQuestOfferReward(
    args: Prisma.QuestOfferRewardUpdateArgs
  ): Promise<PrismaQuestOfferReward> {
    return this.prisma.questOfferReward.update(args);
  }
  async deleteQuestOfferReward(
    args: Prisma.QuestOfferRewardDeleteArgs
  ): Promise<PrismaQuestOfferReward> {
    return this.prisma.questOfferReward.delete(args);
  }
}
