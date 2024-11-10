/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, QuestDetails as PrismaQuestDetails } from "@prisma/client";

export class QuestDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QuestDetailsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.questDetails.count(args);
  }

  async questDetailsItems(
    args: Prisma.QuestDetailsFindManyArgs
  ): Promise<PrismaQuestDetails[]> {
    return this.prisma.questDetails.findMany(args);
  }
  async questDetails(
    args: Prisma.QuestDetailsFindUniqueArgs
  ): Promise<PrismaQuestDetails | null> {
    return this.prisma.questDetails.findUnique(args);
  }
  async createQuestDetails(
    args: Prisma.QuestDetailsCreateArgs
  ): Promise<PrismaQuestDetails> {
    return this.prisma.questDetails.create(args);
  }
  async updateQuestDetails(
    args: Prisma.QuestDetailsUpdateArgs
  ): Promise<PrismaQuestDetails> {
    return this.prisma.questDetails.update(args);
  }
  async deleteQuestDetails(
    args: Prisma.QuestDetailsDeleteArgs
  ): Promise<PrismaQuestDetails> {
    return this.prisma.questDetails.delete(args);
  }
}
