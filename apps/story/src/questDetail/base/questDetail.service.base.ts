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
  QuestDetail as PrismaQuestDetail,
  Quest as PrismaQuest,
} from "@prisma/client";

export class QuestDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QuestDetailCountArgs, "select">
  ): Promise<number> {
    return this.prisma.questDetail.count(args);
  }

  async questDetails(
    args: Prisma.QuestDetailFindManyArgs
  ): Promise<PrismaQuestDetail[]> {
    return this.prisma.questDetail.findMany(args);
  }
  async questDetail(
    args: Prisma.QuestDetailFindUniqueArgs
  ): Promise<PrismaQuestDetail | null> {
    return this.prisma.questDetail.findUnique(args);
  }
  async createQuestDetail(
    args: Prisma.QuestDetailCreateArgs
  ): Promise<PrismaQuestDetail> {
    return this.prisma.questDetail.create(args);
  }
  async updateQuestDetail(
    args: Prisma.QuestDetailUpdateArgs
  ): Promise<PrismaQuestDetail> {
    return this.prisma.questDetail.update(args);
  }
  async deleteQuestDetail(
    args: Prisma.QuestDetailDeleteArgs
  ): Promise<PrismaQuestDetail> {
    return this.prisma.questDetail.delete(args);
  }

  async findQuests(
    parentId: string,
    args: Prisma.QuestFindManyArgs
  ): Promise<PrismaQuest[]> {
    return this.prisma.questDetail
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .quests(args);
  }
}
