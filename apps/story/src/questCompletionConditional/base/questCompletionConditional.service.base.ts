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
  QuestCompletionConditional as PrismaQuestCompletionConditional,
  Quest as PrismaQuest,
} from "@prisma/client";

export class QuestCompletionConditionalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QuestCompletionConditionalCountArgs, "select">
  ): Promise<number> {
    return this.prisma.questCompletionConditional.count(args);
  }

  async questCompletionConditionals(
    args: Prisma.QuestCompletionConditionalFindManyArgs
  ): Promise<PrismaQuestCompletionConditional[]> {
    return this.prisma.questCompletionConditional.findMany(args);
  }
  async questCompletionConditional(
    args: Prisma.QuestCompletionConditionalFindUniqueArgs
  ): Promise<PrismaQuestCompletionConditional | null> {
    return this.prisma.questCompletionConditional.findUnique(args);
  }
  async createQuestCompletionConditional(
    args: Prisma.QuestCompletionConditionalCreateArgs
  ): Promise<PrismaQuestCompletionConditional> {
    return this.prisma.questCompletionConditional.create(args);
  }
  async updateQuestCompletionConditional(
    args: Prisma.QuestCompletionConditionalUpdateArgs
  ): Promise<PrismaQuestCompletionConditional> {
    return this.prisma.questCompletionConditional.update(args);
  }
  async deleteQuestCompletionConditional(
    args: Prisma.QuestCompletionConditionalDeleteArgs
  ): Promise<PrismaQuestCompletionConditional> {
    return this.prisma.questCompletionConditional.delete(args);
  }

  async getQuest(parentId: string): Promise<PrismaQuest | null> {
    return this.prisma.questCompletionConditional
      .findUnique({
        where: { id: parentId },
      })
      .quest();
  }
}