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
  QuestRequestItemsConditional as PrismaQuestRequestItemsConditional,
} from "@prisma/client";

export class QuestRequestItemsConditionalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QuestRequestItemsConditionalCountArgs, "select">
  ): Promise<number> {
    return this.prisma.questRequestItemsConditional.count(args);
  }

  async questRequestItemsConditionals(
    args: Prisma.QuestRequestItemsConditionalFindManyArgs
  ): Promise<PrismaQuestRequestItemsConditional[]> {
    return this.prisma.questRequestItemsConditional.findMany(args);
  }
  async questRequestItemsConditional(
    args: Prisma.QuestRequestItemsConditionalFindUniqueArgs
  ): Promise<PrismaQuestRequestItemsConditional | null> {
    return this.prisma.questRequestItemsConditional.findUnique(args);
  }
  async createQuestRequestItemsConditional(
    args: Prisma.QuestRequestItemsConditionalCreateArgs
  ): Promise<PrismaQuestRequestItemsConditional> {
    return this.prisma.questRequestItemsConditional.create(args);
  }
  async updateQuestRequestItemsConditional(
    args: Prisma.QuestRequestItemsConditionalUpdateArgs
  ): Promise<PrismaQuestRequestItemsConditional> {
    return this.prisma.questRequestItemsConditional.update(args);
  }
  async deleteQuestRequestItemsConditional(
    args: Prisma.QuestRequestItemsConditionalDeleteArgs
  ): Promise<PrismaQuestRequestItemsConditional> {
    return this.prisma.questRequestItemsConditional.delete(args);
  }
}
