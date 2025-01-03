/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, QuestGreeting as PrismaQuestGreeting } from "@prisma/client";

export class QuestGreetingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QuestGreetingCountArgs, "select">
  ): Promise<number> {
    return this.prisma.questGreeting.count(args);
  }

  async questGreetings(
    args: Prisma.QuestGreetingFindManyArgs
  ): Promise<PrismaQuestGreeting[]> {
    return this.prisma.questGreeting.findMany(args);
  }
  async questGreeting(
    args: Prisma.QuestGreetingFindUniqueArgs
  ): Promise<PrismaQuestGreeting | null> {
    return this.prisma.questGreeting.findUnique(args);
  }
  async createQuestGreeting(
    args: Prisma.QuestGreetingCreateArgs
  ): Promise<PrismaQuestGreeting> {
    return this.prisma.questGreeting.create(args);
  }
  async updateQuestGreeting(
    args: Prisma.QuestGreetingUpdateArgs
  ): Promise<PrismaQuestGreeting> {
    return this.prisma.questGreeting.update(args);
  }
  async deleteQuestGreeting(
    args: Prisma.QuestGreetingDeleteArgs
  ): Promise<PrismaQuestGreeting> {
    return this.prisma.questGreeting.delete(args);
  }
}
